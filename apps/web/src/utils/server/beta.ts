export const fetchBeta = async (endpoint: string, data: any) => {
  const baseUrl = process.env.SERVER_URL || 'http://localhost:8080';

  try {
    const response = await fetch(`${baseUrl}/v0${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return { error: 'Failed to fetch data' };
  }
};
