import api from '@services/http/api.client';

export async function fetchCount(amount = 1): Promise<{ data: number }> {
    const response = await fetch('/api/counter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
    });
    const result = await response.json();

    return result;
}

export const counterApi = {
    fetchCount: async (amount: number) =>
        await api.post('/counter', { amount }),
};
