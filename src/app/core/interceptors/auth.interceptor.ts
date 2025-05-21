import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('user_token');

  const publicUrls = ['/episodes', '/characters', '/locations'];

  const isPublicEndpoint = publicUrls.some((url) => req.url.includes(url));

  if (token && !isPublicEndpoint) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authReq);
  }

  return next(req);
};
