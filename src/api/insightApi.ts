const API_BASE_URL = '/api';

const fetchData = async (endpoint: string, token: string) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }

  return await response.json();
};

export const getWeeklyExpenses = async (token: string) => {
  return await fetchData('weekly_expenses/', token);
};

export const getMonthlyExpenses = async (token: string) => {
  return await fetchData('monthly_expenses/', token);
};

export const getWeeklyIncomes = async (token: string) => {
  return await fetchData('weekly_incomes/', token);
};

export const getMonthlyIncomes = async (token: string) => {
  return await fetchData('/monthly_incomes//', token);
};
