import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94A3B8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#456491', 
    marginBottom: 20,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1B365D',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1B365D',
    marginBottom: 6,
  },
  formGroup: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#f8efd8',
    borderWidth: 1,
    borderColor: '#1B365D', 
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1B365D',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    // Sombra para Android
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  col: {
    flex: 0.48,
  },
  dateButton: {
    backgroundColor: '#f8efd8',
    borderWidth: 1,
    borderColor: '#1B365D',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  dateButtonText: {
    color: '#1B365D',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#f4d7a4', 
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth:1,
    borderColor: '#1B365D',
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#1B365D',
    fontSize: 16,
    fontWeight: 'bold',
  },
  frentesContainer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E6DFD3',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#1B365D',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#1B365D',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default styles;