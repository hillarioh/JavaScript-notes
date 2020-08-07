const result = document.getElementById('result');

let approval = 'Not Approved';

// using callbacks
const getApproval = () => {
    // setTimeout(() => {
    //     approval = 'Approved!';
    // }, 500);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('APPROVED!');
        },500);
    });
};

getApproval().then((resolvedApproval) => { result.textContent = resolvedApproval; })
