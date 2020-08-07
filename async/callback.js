const result = document.getElementById('result');

let approval = 'Not Approved';

// using callbacks
const getApproval = (callback)=>{
    setTimeout(()=>{
        approval = 'Approved!';
        callback();
    },500);
};

const callback=()=>{
    result.textContent = approval;
}

getApproval(callback);
result.textContent = approval;