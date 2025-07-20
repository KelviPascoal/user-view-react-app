// useIsMobile.test.tsx
import { renderHook, act } from '@testing-library/react';
import { useIsMobile } from './useIsMobile';

describe('useIsMobile', () => {
    const originalInnerWidth = window.innerWidth;

    afterEach(() => {
        window.innerWidth = originalInnerWidth;
    });

    it('returns true if the screen width is less than the breakpoint', () => {
        window.innerWidth = 400;

        const { result } = renderHook(() => useIsMobile());

        expect(result.current).toBe(true);
    });

    it('returns false if the screen width is greater than or equal to the breakpoint', () => {
        window.innerWidth = 1024;

        const { result } = renderHook(() => useIsMobile());

        expect(result.current).toBe(false);
    });

    it('updates the value of isMobile when resizing the screen', () => {
        window.innerWidth = 1024;

        const { result } = renderHook(() => useIsMobile());

        expect(result.current).toBe(false);

        act(() => {
            window.innerWidth = 375;
            window.dispatchEvent(new Event('resize'));
        });

        expect(result.current).toBe(true);

        act(() => {
            window.innerWidth = 768;
            window.dispatchEvent(new Event('resize'));
        });

        expect(result.current).toBe(false);
    });

    it('works with custom breakpoints', () => {
        window.innerWidth = 500;

        const { result } = renderHook(() => useIsMobile(600));

        expect(result.current).toBe(true);
    });
});
