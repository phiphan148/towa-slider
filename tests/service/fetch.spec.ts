import { describe, it, expect, vi } from 'vitest';
import { ref } from 'vue';
import { useFetch } from '../../src/service/fetch';

// Mock fetch
global.fetch = vi.fn();

describe('useFetch', () => {
  it('should fetch data from the given URL', async () => {
    const mockData = { data: 'test data' };
    (global.fetch as any).mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
    });

    const url = 'https://api.example.com/data';
    const result = await useFetch(url);

    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(result).toEqual(mockData);
  });

  it('should handle fetch error', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error');
    (global.fetch as any).mockRejectedValue(new Error('Fetch error'));

    const url = 'https://api.example.com/data';
    const result = await useFetch(url);

    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Catch error while fetching data from BE: ', expect.any(Error));
    expect(result).toEqual({});
  });

  it('should update isLoading correctly', async () => {
    const mockData = { data: 'test data' };
    (global.fetch as any).mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
    });

    const url = 'https://api.example.com/data';
    const isLoading = ref(true);

    const resultPromise = useFetch(url, isLoading);

    // Check isLoading before the fetch completes
    expect(isLoading.value).toBe(true);

    const result = await resultPromise;

    // Check isLoading after the fetch completes
    expect(isLoading.value).toBe(false);
    expect(result).toEqual(mockData);
  });
});
