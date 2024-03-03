export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useUserStore();
  if (!user) return navigateTo("/login");
});
