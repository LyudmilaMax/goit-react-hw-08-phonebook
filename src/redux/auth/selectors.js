export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectErrorMessage = state => state.auth.errorMessage;

export const selectIsRefreshing = state => state.auth.isRefreshing;
