

import { ListItem,ListItemText,styled,ListItemIcon } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';

const Detail = styled(ListItem)`
        margin-top: 10px;
`
    


const Transaction = ({transaction,setTransactions,transactions}) => {

    const color = transaction.amount > 0 ? 'violet' : '#b3751e';

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !==id))
    }
     return(
        <Detail style={{ background: `${color}`}}>
            <ListItemIcon>
               <DeleteIcon onClick={() => deleteTransaction(transaction.id)}/> 
            </ListItemIcon>
            <ListItemText>{transaction.text}</ListItemText> 
            <ListItemText>{transaction.amount}</ListItemText>  
        </Detail>
     )
}

export default Transaction;