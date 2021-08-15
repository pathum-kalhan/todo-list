import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


function ProtectedRoute({ component: Component, ...rest }) {
  const token = useSelector(state=> state.auth.token)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        } else {
            return <Redirect to={
                {
                    pathname:'/permission-denied',
                    state:{
                        from:props.location
                    }
                }
            }/>
        }
      }}
    />
  );
}

// const mapStateToProps = (state) => {
//   return {
//     token: state.auth.token,
//   };
// };

// export default connect(mapStateToProps, {})(ProtectedRoute);
export default ProtectedRoute;
