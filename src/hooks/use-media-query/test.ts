import { act, renderHook } from '@testing-library/react';

import { useMediaQuery } from '.';

describe('useMediaQuery', () => {
  const listeners: Record<string, (event: MediaQueryListEvent) => void> = {};

  function matchMediaMock(matches: boolean) {
    return jest.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: (
        event: string,
        listener: (e: MediaQueryListEvent) => void,
      ) => {
        listeners[event] = listener;
      },
      removeEventListener: jest.fn((event: string) => {
        delete listeners[event];
      }),
    }));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar true quando a query for satisfeita', () => {
    window.matchMedia = matchMediaMock(true);

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    expect(result.current).toBe(true);
  });

  it('deve retornar false quando a query não for satisfeita', () => {
    window.matchMedia = matchMediaMock(false);

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    expect(result.current).toBe(false);
  });

  it('deve atualizar quando a query mudar', () => {
    window.matchMedia = matchMediaMock(false);

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    expect(result.current).toBe(false);

    act(() => {
      listeners.change({ matches: true } as MediaQueryListEvent);
    });

    // Verifica que o valor foi atualizado para `true` após a mudança
    expect(result.current).toBe(true);
  });
});
