const result = document.getElementById('result');

let approval = 'Not Approved';

// using callbacks
const getApproval = () => {
    // setTimeout(() => {
    //     approval = 'Approved!';
    // }, 500);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('APPROVED!');
        }, 5000);
    });
};


// getApproval().then((resolvedApproval) => { result.textContent = resolvedApproval; })

async function setApprovalText(){
    const approvalPromise = getApproval();
    result.textContent = await approvalPromise;
}

setApprovalText();