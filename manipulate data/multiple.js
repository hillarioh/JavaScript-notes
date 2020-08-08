// Get DOM elements
const generateButton = document.getElementById('generate-button');
const postTitle = document.getElementById('post-title');
const postId = document.getElementById('post-id');
const postContent = document.getElementById('post-content');

// API URL
const api = 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets';

const makeRequest = (verb,url,data)=>{
    return new Promise((resolve,reject)=>{
        if (verb === 'POST' && !data){
            reject({error: "No data provide for object post request"});
        }

        if  (verb!=='POST' && verb!=='GET'){
                reject({error: "Invalid Request Verb"});
        } 
        
        const request = new XMLHttpRequest();
        request.open(verb, url);

        request.onreadystatechange=()=>{
            if(request.readyState === 4){
                if (request.status === 200 || request.status === 201){
                    resolve(JSON.parse(request.response));
                } else {
                    reject(JSON.parse(request.response));
                }
            }
        };

        if (verb === 'POST'){
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(data));
        } else {
            request.send();
        }
    });
};

async function createPost(){

    let uidPromise = makeRequest('GET', api + '/generate-uid');
    let titlePromise = makeRequest('GET', api + '/generate-title');
    let contentPromise = makeRequest('GET', api + '/generate-lorem');

    try {
        const [uidResponse, titleResponse, contentResponse] = await Promise.all([uidPromise, titlePromise, contentPromise]);
        const postPromise = makeRequest('POST', api + '/create-post-with-uid', {
            uid: uidResponse.uid,
            title: titleResponse.title,
            content: contentResponse.lorem
        });

        try {
            const postResponse = await postPromise;
            postTitle.textContent = postResponse.post.title;
            postId.textContent = postResponse.post.id;
            postContent.textContent = postResponse.post.content;

        } catch (errorResponse) {
            postTitle.textContent = errorResponse.error;
        }    
        
    } catch (errorRequest) {
        postTitle.textContent = errorRequest.error;
    }

   
}

generateButton.addEventListener('click',()=>{
    createPost();
});