const PostItemList = (postItem) => {
    return (`
<li class="list-group-item">
<div class="row">
    <div class="col-2">
    <img src="${postItem.iconImage}" class="col-12 rounded-circle">
</div>
    <div class="col-10">
        <div class="row">
            <div class="col-12 fw-light text-secondary"><span class="fw-bold text-white">${postItem.Name}</span> <i class="fa-check fa-solid text-white"></i> ${postItem.userName} ${postItem.time}</div>
        </div>
        <div className="row">
            <div className="col-12 fw-light text-secondary">${postItem.topic}</div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-2"></div>
    <div class="col-10"><img class="col-12" src="${postItem.image}" alt="${postItem.Name}"></div>
</div>
<div class="row">
    <div class="col-2"></div>
    <div class="col-10"><i class="fa-regular fa-message col-2 text-center"></i> <i class="fa-solid fa-retweet text-center col-3"></i> <i class="fa-regular fa-heart text-center col-3"></i> <i class="fa-solid fa-share  text-center col-3"></i></div>
</div>
</li>
`);}
export default PostItemList