// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const Header = ({ navigation, route, rightIcon }) => {
//   const title =
//     route.name === 'Splash' ? 'Splash' :
//     route.name === 'Walkthrough' ? 'Walkthrough' :
//     route.name === 'Welcome' ? 'Welcome' :
//     route.name === 'SignIn' ? 'Sign In' :
//     route.name === 'SignUp' ? 'Sign Up' :
//     route.name === 'ResetPassword' ? 'Reset Password' :
//     route.name === 'OTPVerification' ? 'OTP Verification' :
//     route.name === 'CreatePassword' ? 'Create Password' :
//     route.name === 'ResendOTP' ? 'Resend OTP' :
//     route.name === 'Profile' ? 'Personal Info' :
//     route.name === 'Roles' ? 'Roles Permission' :
//     route.name === 'Account' ? 'Account' :
//     route.name === 'Project' ? 'My Projects' :
//     route.name === 'CreateProject' ? 'Create Project' :
//     route.name === 'Filter' ? 'Filter' :
//     route.name === 'ProjectDetails' ? 'Project Details' :
//     route.name === 'Tasks' ? 'Tasks' :
//     route.name === 'NewTask' ? 'New Task' :
//     route.name === 'AssignTask' ? 'Assign Task' :
//     route.name === 'AssignTaskDetails' ? 'Assign Task Details' :
//     route.name === 'Proposals' ? 'Proposals' :
//     route.name === 'ApproveProposals' ? 'Approve Proposals' :
//     route.name === 'ProposalDetails' ? 'Proposal Details' :
//     route.name === 'ChooseTemplate' ? 'Choose Template' :
//     route.name === 'CreateProposal' ? 'Create Proposal' :
//     route.name === 'SubmitProposal' ? 'Submit Proposal' :
//     route.name === 'ViewProposal' ? 'View Proposal' :
//     route.name === 'RequestChange' ? 'Request Change' :
//     route.name === 'Transaction' ? 'Transaction' :
//     route.name === 'TransactionDetails' ? 'Transaction Details' :
//     route.name === 'IncomingPayment' ? 'Incoming Payment' :
//     route.name === 'OutgoingPayment' ? 'Outgoing Payment' :
//     route.name === 'DebitNote' ? 'Debit Note' :
//     route.name === 'CreateInvoice' ? 'Create Invoice' :
//     route.name === 'InvoiceAddItem' ? 'Invoice Add Item' :
//     route.name === 'MaterialPurchase' ? 'Material Purchase' :
//     route.name === 'TransactionApproval' ? 'Transaction Approval' :
//     route.name === 'Dashboard' ? 'Dashboard' :
//     route.name === 'SurveyRequest' ? 'Survey Request' :
//     route.name === 'SurveyApproval' ? 'Survey Approval' :
//     route.name === 'NewSurvey' ? 'New Survey' :
//     route.name === 'SurveyRequestDetails' ? 'Survey Request Details' :
//     route.name === 'SurveyComments' ? 'Survey Comments' :
//     route.name === 'SurveyAttachments' ? 'Survey Attachments' :
//     'Default Title';

//   const iconName =
//     route.name === 'Filter' ? 'filter' :
//     route.name === 'NewTask' || route.name === 'CreateProject' || route.name === 'CreateProposal' || route.name === 'CreateInvoice' ? 'create' :
//     route.name === 'Profile' || route.name === 'Roles' || route.name === 'Account' ? 'notifications' :
//     undefined;

//   return (
//     <View style={styles.header}>
//       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//         <Ionicons name="arrow-back" size={24} color="#fff" />
//       </TouchableOpacity>
//       <Text style={styles.title}>{title}</Text>
//       {iconName && (
//         <TouchableOpacity style={styles.iconButton}>
//           <Ionicons name={iconName} size={24} color="#fff" />
//         </TouchableOpacity>
//       )}
//       {rightIcon && (
//         <TouchableOpacity style={styles.rightIconButton}>
//           <Ionicons name={rightIcon} size={24} color="#fff" />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#007AFF',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   backButton: {
//     padding: 5,
//   },
//   title: {
//     flex: 1,
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   iconButton: {
//     padding: 5,
//   },
//   rightIconButton: {
//     padding: 5,
//   },
// });

// export default Header;
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ navigation, route, rightIcon, onRightIconPress }) => {
  const title =
    route.name === 'Splash' ? 'Splash' :
    route.name === 'Walkthrough' ? 'Walkthrough' :
    route.name === 'Welcome' ? 'Welcome' :
    route.name === 'SignIn' ? 'Sign In' :
    route.name === 'SignUp' ? 'Sign Up' :
    route.name === 'ResetPassword' ? 'Reset Password' :
    route.name === 'OTPVerification' ? 'OTP Verification' :
    route.name === 'CreatePassword' ? 'Create Password' :
    route.name === 'ResendOTP' ? 'Resend OTP' :
    route.name === 'Profile' ? 'Personal Info' :
    route.name === 'Roles' ? 'Roles Permission' :
    route.name === 'Account' ? 'Account' :
    route.name === 'Project' ? 'My Projects' :
    route.name === 'CreateProject' ? 'Create Project' :
    route.name === 'Filter' ? 'Filter' :
    route.name === 'ProjectDetails' ? 'Project Details' :
    route.name === 'Tasks' ? 'Tasks' :
    route.name === 'NewTask' ? 'New Task' :
    route.name === 'AssignTask' ? 'Assign Task' :
    route.name === 'AssignTaskDetails' ? 'Assign Task Details' :
    route.name === 'Proposals' ? 'Proposals' :
    route.name === 'ApproveProposals' ? 'Approve Proposals' :
    route.name === 'ProposalDetails' ? 'Proposal Details' :
    route.name === 'ChooseTemplate' ? 'Choose Template' :
    route.name === 'CreateProposal' ? 'Create Proposal' :
    route.name === 'SubmitProposal' ? 'Submit Proposal' :
    route.name === 'ViewProposal' ? 'View Proposal' :
    route.name === 'RequestChange' ? 'Request Change' :
    route.name === 'Transaction' ? 'Transaction' :
    route.name === 'TransactionDetails' ? 'Transaction Details' :
    route.name === 'IncomingPayment' ? 'Incoming Payment' :
    route.name === 'OutgoingPayment' ? 'Outgoing Payment' :
    route.name === 'DebitNote' ? 'Debit Note' :
    route.name === 'CreateInvoice' ? 'Create Invoice' :
    route.name === 'InvoiceAddItem' ? 'Invoice Add Item' :
    route.name === 'MaterialPurchase' ? 'Material Purchase' :
    route.name === 'TransactionApproval' ? 'Transaction Approval' :
    route.name === 'Dashboard' ? 'Dashboard' :
    route.name === 'SurveyRequest' ? 'Survey Request' :
    route.name === 'SurveyApproval' ? 'Survey Approval' :
    route.name === 'NewSurvey' ? 'New Survey' :
    route.name === 'SurveyRequestDetails' ? 'Survey Request Details' :
    route.name === 'SurveyComments' ? 'Survey Comments' :
    route.name === 'SurveyAttachments' ? 'Survey Attachments' :
    route.name === 'Settings' ? 'Settings' :
    'Default Title';

  const iconName =
    route.name === 'Filter' ? 'filter' :
    route.name === 'NewTask' || route.name === 'CreateProject' || route.name === 'CreateProposal' || route.name === 'CreateInvoice' ? 'create' :
    route.name === 'Profile' || route.name === 'Roles' || route.name === 'Account' ? 'notifications' :
    undefined;

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {iconName && (
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name={iconName} size={24} color="#fff" />
        </TouchableOpacity>
      )}
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress} style={styles.rightIconButton}>
          <Ionicons name={rightIcon} size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 35,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    padding: 5,
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconButton: {
    padding: 5,
  },
  rightIconButton: {
    padding: 5,
  },
});

export default Header;