import { HistoryContainer } from './styles';

const History = ({values}) => {

    const LoopParagrafos = () => {
        return values.map(element => {
            return (
                <p key={Math.random()}>{element.calculo} = {element.resultado}</p>
            )
        })
    }

    return (
        <HistoryContainer>
            <LoopParagrafos></LoopParagrafos>
        </HistoryContainer>
    );
}

export default History;