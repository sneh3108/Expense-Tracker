import { useState } from 'react';
import { Box, Typography,TextField ,Button,styled} from '@mui/material'

const Container = styled(Box)`
   display:flex;
   flex-direction: column;
   & > h5 ,&>div,&>Button{
      margin-top: 30px
   }
`

const StyledButton = styled(Button)`
    background: #445A6F;
    color: #fff;
`

const NewTransactions = ({setTransactions}) => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const addTransaction = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }
        setTransactions(prevState => [transaction,...prevState]);
    }



    return(
        <Container>
            <Typography variant="h5">New Transaction</Typography>
            <TextField value={text} label="Enter Expense" onChange = {(e) => setText(e.target.value)} />
            <TextField value={amount} label="Enter Amount" onChange = {(e) => setAmount(e.target.value)}  />
            <Button variant="contained" onClick={() => addTransaction()}>Add Transaction</Button>
        </Container>
    )
}

export default NewTransactions;