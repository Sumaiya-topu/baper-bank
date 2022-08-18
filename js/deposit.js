document.getElementById('deposit-button').addEventListener('click', function () {
    let depositField = document.getElementById('deposit-amount');
    let newDepositAmount = depositField.value;

    let previousTotalDeposit = document.getElementById('deposit-total');
    let previousTotalDepositAmount = previousTotalDeposit.innerText;

    let currentTotalDepositAmount = parseFloat(newDepositAmount) + parseFloat(previousTotalDepositAmount);
    previousTotalDeposit.innerText = currentTotalDepositAmount;

    let previousBalance = document.getElementById('total-balance');
    let previousTotalBalance = previousBalance.innerText;

    let currentTotalBalance = parseFloat(previousTotalBalance) + parseFloat(newDepositAmount);
    previousBalance.innerText = currentTotalBalance;


    depositField.value = ' ';
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    let withdrawField = document.getElementById('new-withdraw-amount');
    let newWithdrawAmount = withdrawField.value;

    let previousWithdrawAmount = document.getElementById('previous-withdraw-amount');
    let previousTotalWithdrawAmount = previousWithdrawAmount.innerText;


    let currentTotalWithdrawAmount = parseFloat(newWithdrawAmount) + parseFloat(previousTotalWithdrawAmount);
    previousWithdrawAmount.innerText = currentTotalWithdrawAmount;

    let previousBalance = document.getElementById('total-balance');
    let previousTotalBalance = previousBalance.innerText;
    let currentTotalBalance = parseFloat(previousTotalBalance) - parseFloat(newWithdrawAmount);
    previousBalance.innerText = currentTotalBalance;

    withdrawField.value = ' ';

})