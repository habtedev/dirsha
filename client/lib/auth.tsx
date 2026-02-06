"use client";
// auth.tsx
// Utility functions for authentication and redirection

// Check if user is authenticated
export function isAuthenticated() {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('token');
}

// Redirect to login page and remember where to go after login
export function redirectToLogin(router: any) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('postLoginRedirect', window.location.pathname);
    router.replace('/login');
  }
}

// After login, redirect to the page the user wanted
export function redirectAfterLogin(router: any) {
  if (typeof window !== 'undefined') {
    const redirectPath = localStorage.getItem('postLoginRedirect') || '/';
    localStorage.removeItem('postLoginRedirect');
    router.replace(redirectPath);
  }
}
