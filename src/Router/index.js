import { Navigate, useRoutes } from "react-router-dom";

// guards



import { useState, useEffect } from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";

// Components
import DashboardLayout from '../Layouts/index';
import ProblemOne from "../Pages/ProblemOne";
import ProblemTwo from "../Pages/ProblenTwo";

// Pages



const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <DashboardLayout />,
            children: [
                { path: "", element: <Navigate to="ProblemOne" /> },
                { path: "ProblemOne", element: <ProblemOne /> },
                { path: "ProblemTwo", element: < ProblemTwo/> },
            //     { path: "inactiveUsers", element: <InactiveUsers /> },
            ]
          },
        // {
        //     path: "auth",
        //     children: [
        //       {
        //         path: "",
        //         element: <Navigate to="/auth/login" />,
        //       },
        //       {
        //         path: "login",
        //         element: (
        //           <GuestGuard>
        //             <Login />
        //           </GuestGuard>
        //         ),
        //       },
        //     ],
        //   },
        //   {
        //     path: "login",
        //     element: <Navigate to="/auth/login" />,
        //   },
        // {
        //     path: "admin",
        //     element: (
        //       <AuthGuard>
        //         <DashboardLayout />
        //       </AuthGuard>
        //     ),
        //     children: [
        //       { path: "", element: <Navigate to="/admin/allUsers" /> },

        //       { path: "allUsers", element: <AllUsers /> },
        //       { path: "activeUsers", element: <ActiveUsers /> },
        //       { path: "inactiveUsers", element: <InactiveUsers /> },
            //   { path: "all-transactions", element: <Transactions /> },
            //   { path: "add-new-transaction", element: <AddNewTransaction /> },
            //   { path: "all-agents/:id", element: <UpdateAgentProfile /> },
            //   { path: "all-branches", element: <AllBranches /> },
            //   { path: "all-insurer", element: <AllInsurer /> },
            //   {path: "commission-management",element: <AccountManagement />,},
            //   { path: "account-management", element: <CommissionManagement /> },
            //   { path: "grievance-management", element: <GrievanceManagement /> },
            //   { path: "report-management", element: <ReportManagement /> },
            //   { path: "permission-management", element: <PermissionManagement /> },
          //   ],
          // },
    ]);
}
export default Router;
