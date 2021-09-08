import { useRouter } from 'next/router';
const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const Router = useRouter();
      console.log('router', Router.pathname);
      //   const accessToken = localStorage.getItem("accessToken");

      // If there is no access token we redirect to "/" page.
      if (!localStorage.getItem('access_token')) {
        Router.replace('/login');
        return null;
      }
      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
