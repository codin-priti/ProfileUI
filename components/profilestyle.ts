import { StyleSheet } from 'react-native';

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
   profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileTitle: {
    color: '#fff',
    fontSize: 20,
    alignItems: 'flex-start',
    fontWeight: 'bold',
    padding:5,
  },

  button: {
        backgroundColor: '#1e1e1e',
        flexDirection: 'row',
        alignItems: 'center',
         borderColor:'#444',
        borderRadius: 20,
        borderWidth: 1,
        padding: 12,
    },

buttonText: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 5,
       
    },
userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
 
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  memberSince: {
    color: '#777',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  editButton: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 15,
    paddingLeft: 60,
    backgroundColor: '#1e1e1e',
  },
card: {
    backgroundColor: 'black',
    borderRadius: 1,
    borderColor: 'grey',
    borderWidth: 1,
    flexDirection: 'row',
    padding: 13,
    marginVertical: 15,
    alignItems: 'flex-start',
  },

iconCard: {
    width:30,
    height: 30,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    
  },

textSection: {
    flex: 1,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 13,
    marginBottom: 4,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
cardSubtitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },

iconCircle: {
    width:20,
    height: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  infoRow: {
    borderTopColor: '#333',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    color: '#aaa',
    marginRight: 10,
  },
  infoLabel: {
    color: '#ccc',
    flex: 1,
  },
  refreshText: {
    color: '#00ff88',
    marginRight: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoValue: {
    color: '#fff',
    marginRight: 10,
  },
arrow: {
  color: '#888',
  fontSize: 16,
  marginLeft: 8,
},
leftarrow:{
  color: '#888',
  fontSize: 20,
  marginLeft: 8,
  justifyContent: 'flex-end',
},

  divider: {
  height: 1,
  backgroundColor: '#333',
  marginVertical: 10,      
},
sectionTitle: {
    color: '#888',
    marginVertical: 10,
    fontSize: 16,
    padding:20,
    fontWeight: 'bold',
  },
  rewardBox: {
    padding: 15,
    marginBottom: 10,
      flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
 // dark background

  },
  reward:{
    backgroundColor: 'black',
    padding: 8,
    marginBottom: 20,
  },
  rewardLabel: {
     color: '#fff',
  fontSize: 14,
  fontWeight: '500',
},



 rewardValue: {
   color: '#aaa',
    fontSize: 14,
 },











 });



export default profileStyles;
