// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import "../../global.css"
// import Header from '../components/Header';

// // Authentication Screens
// import SplashScreen from '../screens/Authentication/SplashScreen';
// import WalkthroughScreen from '../screens/Authentication/WalkthroughScreen';
// import WelcomeScreen from '../screens/Authentication/WelcomeScreen';
// import SignInScreen from '../screens/Authentication/SignInScreen';
// import SignUpScreen from '../screens/Authentication/SignUpScreen';
// import ResetPasswordScreen from '../screens/Authentication/ResetPasswordScreen';
// import OTPVerificationScreen from '../screens/Authentication/OTPVerificationScreen';
// import CreatePasswordScreen from '../screens/Authentication/CreatePasswordScreen';
// import ResendOTPScreen from '../screens/Authentication/ResendOTPScreen';
// import ProfileScreen from '../screens/Authentication/ProfileScreen';
// import RolesScreen from '../screens/Authentication/RolesScreen';
// import AccountScreen from '../screens/Authentication/AccountScreen';
// import SettingsScreen from '../screens/Authentication/SettingsScreen';

// // Project Management Screens
// import ProjectScreen from '../screens/ProjectManagement/ProjectScreen';
// import CreateProjectScreen from '../screens/ProjectManagement/CreateProjectScreen';
// import FilterScreen from '../screens/ProjectManagement/FilterScreen';
// import ProjectDetailsScreen from '../screens/ProjectManagement/ProjectDetailsScreen';
// import TasksScreen from '../screens/ProjectManagement/TasksScreen';
// import NewTaskScreen from '../screens/ProjectManagement/NewTaskScreen';
// import AssignTaskScreen from '../screens/ProjectManagement/AssignTaskScreen';
// import AssignTaskDetailsScreen from '../screens/ProjectManagement/AssignTaskDetailsScreen';

// // Proposals Screens
// import ProposalsScreen from '../screens/Proposals/ProposalsScreen';
// import ApproveProposalsScreen from '../screens/Proposals/ApproveProposalsScreen';
// import ProposalDetailsScreen from '../screens/Proposals/ProposalDetailsScreen';
// import ChooseTemplateScreen from '../screens/Proposals/ChooseTemplateScreen';
// import CreateProposalScreen from '../screens/Proposals/CreateProposalScreen';
// import SubmitProposalScreen from '../screens/Proposals/SubmitProposalScreen';
// import ViewProposalScreen from '../screens/Proposals/ViewProposalScreen';
// import RequestChangeScreen from '../screens/Proposals/RequestChangeScreen';

// // Accounting Screens
// import TransactionScreen from '../screens/Accounting/TransactionScreen';
// import TransactionDetailsScreen from '../screens/Accounting/TransactionDetailsScreen';
// import IncomingPaymentScreen from '../screens/Accounting/IncomingPaymentScreen';
// import OutgoingPaymentScreen from '../screens/Accounting/OutgoingPaymentScreen';
// import DebitNoteScreen from '../screens/Accounting/DebitNoteScreen';
// import CreateInvoiceScreen from '../screens/Accounting/CreateInvoiceScreen';
// import InvoiceAddItemScreen from '../screens/Accounting/InvoiceAddItemScreen';
// import MaterialPurchaseScreen from '../screens/Accounting/MaterialPurchaseScreen';
// import TransactionApprovalScreen from '../screens/Accounting/TransactionApprovalScreen';

// // Site Survey Screens
// import DashboardScreen from '../screens/SiteSurvey/DashboardScreen';
// import SurveyRequestScreen from '../screens/SiteSurvey/SurveyRequestScreen';
// import SurveyApprovalScreen from '../screens/SiteSurvey/SurveyApprovalScreen';
// import NewSurveyScreen from '../screens/SiteSurvey/NewSurveyScreen';
// import SurveyRequestDetailsScreen from '../screens/SiteSurvey/SurveyRequestDetailsScreen';
// import SurveyCommentsScreen from '../screens/SiteSurvey/SurveyCommentsScreen';
// import SurveyAttachmentsScreen from '../screens/SiteSurvey/SurveyAttachmentsScreen';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   const getHeaderOptions = (route) => {
//     const noHeaderRoutes = ['Splash', 'Walkthrough', 'Welcome'];
//     if (noHeaderRoutes.includes(route.name)) {
//       return { headerShown: false };
//     }
//     return {
//       header: (props) => {
//         const onRightIconPress = () => {
//           if (route.name === 'Profile') {
//             props.navigation.navigate('Settings');
//           }
//           // Add more conditions for other screens if needed
//         };
//         return (
//           <Header
//             {...props}
//             rightIcon={route.name === 'Profile' ? 'edit' : route.name === 'Filter' ? 'settings' : undefined}
//             onRightIconPress={onRightIconPress}
//           />
//         );
//       },
//       headerShown: true,
//     };
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={({ route }) => getHeaderOptions(route)}>
//         <Stack.Screen name="Splash" component={SplashScreen} />
//         <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
//         <Stack.Screen name="Welcome" component={WelcomeScreen} />
//         <Stack.Screen name="SignIn" component={SignInScreen} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//         <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
//         <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
//         <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
//         <Stack.Screen name="ResendOTP" component={ResendOTPScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//         <Stack.Screen name="Roles" component={RolesScreen} />
//         <Stack.Screen name="Account" component={AccountScreen} />
//         <Stack.Screen name="Settings" component={SettingsScreen} />
//         <Stack.Screen name="Project" component={ProjectScreen} />
//         <Stack.Screen name="CreateProject" component={CreateProjectScreen} />
//         <Stack.Screen name="Filter" component={FilterScreen} />
//         <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} />
//         <Stack.Screen name="Tasks" component={TasksScreen} />
//         <Stack.Screen name="NewTask" component={NewTaskScreen} />
//         <Stack.Screen name="AssignTask" component={AssignTaskScreen} />
//         <Stack.Screen name="AssignTaskDetails" component={AssignTaskDetailsScreen} />
//         <Stack.Screen name="Proposals" component={ProposalsScreen} />
//         <Stack.Screen name="ApproveProposals" component={ApproveProposalsScreen} />
//         <Stack.Screen name="ProposalDetails" component={ProposalDetailsScreen} />
//         <Stack.Screen name="ChooseTemplate" component={ChooseTemplateScreen} />
//         <Stack.Screen name="CreateProposal" component={CreateProposalScreen} />
//         <Stack.Screen name="SubmitProposal" component={SubmitProposalScreen} />
//         <Stack.Screen name="ViewProposal" component={ViewProposalScreen} />
//         <Stack.Screen name="RequestChange" component={RequestChangeScreen} />
//         <Stack.Screen name="Transaction" component={TransactionScreen} />
//         <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} />
//         <Stack.Screen name="IncomingPayment" component={IncomingPaymentScreen} />
//         <Stack.Screen name="OutgoingPayment" component={OutgoingPaymentScreen} />
//         <Stack.Screen name="DebitNote" component={DebitNoteScreen} />
//         <Stack.Screen name="CreateInvoice" component={CreateInvoiceScreen} />
//         <Stack.Screen name="InvoiceAddItem" component={InvoiceAddItemScreen} />
//         <Stack.Screen name="MaterialPurchase" component={MaterialPurchaseScreen} />
//         <Stack.Screen name="TransactionApproval" component={TransactionApprovalScreen} />
//         <Stack.Screen name="Dashboard" component={DashboardScreen} />
//         <Stack.Screen name="SurveyRequest" component={SurveyRequestScreen} />
//         <Stack.Screen name="SurveyApproval" component={SurveyApprovalScreen} />
//         <Stack.Screen name="NewSurvey" component={NewSurveyScreen} />
//         <Stack.Screen name="SurveyRequestDetails" component={SurveyRequestDetailsScreen} />
//         <Stack.Screen name="SurveyComments" component={SurveyCommentsScreen} />
//         <Stack.Screen name="SurveyAttachments" component={SurveyAttachmentsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import "../../global.css";
import Header from "../components/Header";

// ===== AUTHENTICATION SCREENS =====
import SplashScreen from "../screens/Authentication/SplashScreen";
import WalkthroughScreen from "../screens/Authentication/WalkthroughScreen";
import WelcomeScreen from "../screens/Authentication/WelcomeScreen";
import SignInScreen from "../screens/Authentication/SignInScreen";
import SignUpScreen from "../screens/Authentication/SignUpScreen";
import ResetPasswordScreen from "../screens/Authentication/ResetPasswordScreen";
import OTPVerificationScreen from "../screens/Authentication/OTPVerificationScreen";
import CreatePasswordScreen from "../screens/Authentication/CreatePasswordScreen";
import ResendOTPScreen from "../screens/Authentication/ResendOTPScreen";
import ProfileScreen from "../screens/Authentication/ProfileScreen";
import RolesScreen from "../screens/Authentication/RolesScreen";
import AccountScreen from "../screens/Authentication/AccountScreen";
import SettingsScreen from "../screens/Authentication/SettingsScreen";

// ===== PROJECT MANAGEMENT =====
import ProjectScreen from "../screens/ProjectManagement/ProjectScreen";
import CreateProjectScreen from "../screens/ProjectManagement/CreateProjectScreen";
import FilterScreen from "../screens/ProjectManagement/FilterScreen";
import ProjectDetailsScreen from "../screens/ProjectManagement/ProjectDetailsScreen";
import TasksScreen from "../screens/ProjectManagement/TasksScreen";
import NewTaskScreen from "../screens/ProjectManagement/NewTaskScreen";
import AssignTaskScreen from "../screens/ProjectManagement/AssignTaskScreen";
import AssignTaskDetailsScreen from "../screens/ProjectManagement/AssignTaskDetailsScreen";

// ===== PROPOSALS =====
import ProposalsScreen from "../screens/Proposals/ProposalsScreen";
import ApproveProposalsScreen from "../screens/Proposals/ApproveProposalsScreen";
import ProposalDetailsScreen from "../screens/Proposals/ProposalDetailsScreen";
import ChooseTemplateScreen from "../screens/Proposals/ChooseTemplateScreen";
import CreateProposalScreen from "../screens/Proposals/CreateProposalScreen";
import SubmitProposalScreen from "../screens/Proposals/SubmitProposalScreen";
import ViewProposalScreen from "../screens/Proposals/ViewProposalScreen";
import RequestChangeScreen from "../screens/Proposals/RequestChangeScreen";

// ===== ACCOUNTING =====
import TransactionScreen from "../screens/Accounting/TransactionScreen";
import TransactionDetailsScreen from "../screens/Accounting/TransactionDetailsScreen";
import IncomingPaymentScreen from "../screens/Accounting/IncomingPaymentScreen";
import OutgoingPaymentScreen from "../screens/Accounting/OutgoingPaymentScreen";
import DebitNoteScreen from "../screens/Accounting/DebitNoteScreen";
import CreateInvoiceScreen from "../screens/Accounting/CreateInvoiceScreen";
import InvoiceAddItemScreen from "../screens/Accounting/InvoiceAddItemScreen";
import MaterialPurchaseScreen from "../screens/Accounting/MaterialPurchaseScreen";
import TransactionApprovalScreen from "../screens/Accounting/TransactionApprovalScreen";

// ===== SITE SURVEY =====
import DashboardScreen from "../screens/SiteSurvey/DashboardScreen";
import SurveyRequestScreen from "../screens/SiteSurvey/SurveyRequestScreen";
import SurveyApprovalScreen from "../screens/SiteSurvey/SurveyApprovalScreen";
import NewSurveyScreen from "../screens/SiteSurvey/NewSurveyScreen";
import SurveyRequestDetailsScreen from "../screens/SiteSurvey/SurveyRequestDetailsScreen";
import SurveyCommentsScreen from "../screens/SiteSurvey/SurveyCommentsScreen";
import SurveyAttachmentsScreen from "../screens/SiteSurvey/SurveyAttachmentsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* =========================================
🔹 Header Wrapper
========================================= */
const withHeader = (Component) => {
  return ({ navigation, route }) => (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} route={route} />
      <Component navigation={navigation} route={route} />
    </View>
  );
};

/* =========================================
🔹 Auth Stack (Header on some screens)
========================================= */
const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* Intro screens (no header) */}
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />

    {/* Auth screens (with header) */}
    <Stack.Screen name="SignIn" component={withHeader(SignInScreen)} />
    <Stack.Screen name="SignUp" component={withHeader(SignUpScreen)} />
    <Stack.Screen name="ResetPassword" component={withHeader(ResetPasswordScreen)} />
    <Stack.Screen name="OTPVerification" component={withHeader(OTPVerificationScreen)} />
    <Stack.Screen name="CreatePassword" component={withHeader(CreatePasswordScreen)} />
    <Stack.Screen name="ResendOTP" component={withHeader(ResendOTPScreen)} />
  </Stack.Navigator>
);

/* =========================================
🏠 Home Stack 
========================================= */
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="PaymentsDashboard" component={withHeader(TransactionScreen)} />
    <Stack.Screen name="TransactionDetails" component={withHeader(TransactionDetailsScreen)} />
    <Stack.Screen name="IncomingPayment" component={withHeader(IncomingPaymentScreen)} />
    <Stack.Screen name="OutgoingPayment" component={withHeader(OutgoingPaymentScreen)} />
    <Stack.Screen name="DebitNote" component={withHeader(DebitNoteScreen)} />
    <Stack.Screen name="CreateInvoice" component={withHeader(CreateInvoiceScreen)} />
    <Stack.Screen name="InvoiceAddItem" component={withHeader(InvoiceAddItemScreen)} />
    <Stack.Screen name="MaterialPurchase" component={withHeader(MaterialPurchaseScreen)} />
    <Stack.Screen name="TransactionApproval" component={withHeader(TransactionApprovalScreen)} />
  </Stack.Navigator>
);

/* =========================================
📁 Projects Stack
========================================= */
const ProjectsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProjectDashboard" component={withHeader(ProjectScreen)} />
    <Stack.Screen name="CreateProject" component={withHeader(CreateProjectScreen)} />
    <Stack.Screen name="Filter" component={withHeader(FilterScreen)} />
    <Stack.Screen name="ProjectDetails" component={withHeader(ProjectDetailsScreen)} />
  </Stack.Navigator>
);

/* =========================================
✅ Tasks Stack
========================================= */
const TasksStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="TasksMain" component={withHeader(TasksScreen)} />
    <Stack.Screen name="NewTask" component={withHeader(NewTaskScreen)} />
    <Stack.Screen name="AssignTask" component={withHeader(AssignTaskScreen)} />
    <Stack.Screen name="AssignTaskDetails" component={withHeader(AssignTaskDetailsScreen)} />
  </Stack.Navigator>
);

/* =========================================
💳 Payments Stack (now contains Home/Site Survey screens)
========================================= */
const PaymentsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dashboard" component={withHeader(DashboardScreen)} />
    <Stack.Screen name="SurveyRequest" component={withHeader(SurveyRequestScreen)} />
    <Stack.Screen name="SurveyApproval" component={withHeader(SurveyApprovalScreen)} />
    <Stack.Screen name="NewSurvey" component={withHeader(NewSurveyScreen)} />
    <Stack.Screen name="SurveyRequestDetails" component={withHeader(SurveyRequestDetailsScreen)} />
    <Stack.Screen name="SurveyComments" component={withHeader(SurveyCommentsScreen)} />
    <Stack.Screen name="SurveyAttachments" component={withHeader(SurveyAttachmentsScreen)} />
  </Stack.Navigator>
);

/* =========================================
👤 Account Stack
========================================= */
const AccountStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AccountDashboard" component={withHeader(AccountScreen)} />
    <Stack.Screen name="Profile" component={withHeader(ProfileScreen)} />
    <Stack.Screen name="Roles" component={withHeader(RolesScreen)} />
    <Stack.Screen name="Settings" component={withHeader(SettingsScreen)} />
  </Stack.Navigator>
);

/* =========================================
🚀 Main Tabs
========================================= */
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: true,
      tabBarStyle: {
        height: 60,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#eee",
      },
      tabBarIcon: ({ focused }) => {
        let iconName;
        switch (route.name) {
          case "Home":
            iconName = focused ? "home" : "home-outline";
            break;
          case "Projects":
            iconName = focused ? "folder" : "folder-outline";
            break;
          case "Payments":
            iconName = focused ? "card" : "card-outline";
            break;
          case "Tasks":
            iconName = focused ? "list" : "list-outline";
            break;
          case "Account":
            iconName = focused ? "person" : "person-outline";
            break;
          default:
            iconName = "ellipse";
        }
        return <Ionicons name={iconName} size={22} color={focused ? "#2563eb" : "#999"} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Projects" component={ProjectsStack} />
    <Tab.Screen name="Payments" component={PaymentsStack} />
    <Tab.Screen name="Tasks" component={TasksStack} />
    <Tab.Screen name="Account" component={AccountStack} />
  </Tab.Navigator>
);

/* =========================================
🌐 Root Navigator
========================================= */
const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Auth" component={AuthStack} />
    <Stack.Screen name="MainTabs" component={MainTabs} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);

export default AppNavigator;
