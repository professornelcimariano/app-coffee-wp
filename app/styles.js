import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#260F0D',
        padding: 20,
    },
    textIcon: {
        marginBottom: 20,
        marginTop: 20,
        color: '#fff',
        fontSize: 20,
    },
    buttonOne: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#F2D8C2',
        alignItems: 'center',
        borderRadius: 30,
        boxShadow: '5px 4px 3px rgba(0, 0, 0, 0.4)', /* offset-x | offset-y | blur-radius | spread-radius | color */
    },
    buttonOneText: {
        flex: 1,
        fontSize: 18,
        color: '#010101',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titleTwo: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        color: '#fff',
        fontSize: 20
    },
    itemTwo: {
        backgroundColor: '#F2D8C2',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'column',
        width: '100%',
        //alignItems: 'center', // Alinha a imagem e o texto verticalmente
        // position: 'relative', // Permite o posicionamento absoluto do botão
    },
    itemTwoDetails: {
        flexDirection: 'row', // Organiza imagem e texto lado a lado
        alignItems: 'center', // Alinha a imagem e o texto verticalmente
        // position: 'relative', // Permite o posicionamento absoluto do botão
    },
    itemTwoButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        paddingVertical: 15, // Espaçamento vertical do botão
        paddingHorizontal: 20, // Espaçamento horizontal do botão
        boxShadow: '2px 4px 3px rgba(0, 0, 0, 0.4)', /* offset-x | offset-y | blur-radius | spread-radius | color */
        backgroundColor: '#260F0D', // Cor de fundo do botão
        borderRadius: 30,
        marginTop: 10, // Espaço entre o item e o botão
    },
    itemTwoButtonText: {
        flex: 1,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    linkIcon: {

    },
    imageTwo: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    itemTwoText: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    itemTwotitleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemTwodescriptionProduct: {
        marginTop: 5,
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'left',
        textAlign: 'justify',
    },
});

export default styles;
