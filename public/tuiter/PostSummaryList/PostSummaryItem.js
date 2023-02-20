const PostSummaryItem = (post) => {
    return (`
    <li class ="list-group-item">
                    <div class="row">
                        <div class="col-9">
                            <div class="row">
                                <div class="col-12 fw-light text-secondary">${post.topic}</div>
                            </div>
                                <div class ="row">
                                    <div class="text-dark fw-bold col-12">${post.userName} <i class="fa-solid fa-check"></i> <span class="text-secondary fw-light">${post.time}</span></div>
                                </div>
                            <div class ="row">
                                <div class="text-dark fw-bold col-12">${post.title}</div>
                            </div>

                            </div>
                        <div class=" col-3">
                            <img  height="100%" width="100%" src="${post.image}" alt="reactJS">

                        </div>

                    </div>
                </li>
`);
}
export default PostSummaryItem