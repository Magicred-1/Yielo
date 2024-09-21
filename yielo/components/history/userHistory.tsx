import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const transactions = [
    {
      transactionId: "TX001",
      type: "Deposit",  // Paid invoices are deposits
      amount: "€250.00",
      method: "Apple Pay",
    },
    {
      transactionId: "TX002",
      type: "Withdrawal",  // Pending/Unpaid invoices are withdrawals
      amount: "€150.00",
      method: "SEPA",
    },
    {
      transactionId: "TX003",
      type: "Withdrawal",  // Unpaid
      amount: "€350.00",
      method: "Bank Transfer",
    },
    {
      transactionId: "TX004",
      type: "Deposit",  // Paid
      amount: "€450.00",
      method: "Apple Pay",
    },
    {
      transactionId: "TX005",
      type: "Deposit",  // Paid
      amount: "€550.00",
      method: "SEPA",
    },
    {
      transactionId: "TX006",
      type: "Withdrawal",  // Pending
      amount: "€200.00",
      method: "Bank Transfer",
    },
    {
        transactionId: "TX007",
        type: "Stake",  // Unpaid
        amount: "€300.00",
        method: "Balance",
    },
    {
      transactionId: "TX007",
      type: "Withdrawal",  // Unpaid
      amount: "€300.00",
      method: "Apple Pay",
    },
  ];
  
  
  export function UserHistory() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.transactionId}>
              <TableCell className="font-medium text-black">{transaction.type}</TableCell>
              <TableCell className="text-black">{transaction.transactionId}</TableCell>
              <TableCell className="text-black">{transaction.method}</TableCell>
              <TableCell className="text-right text-black">{transaction.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  