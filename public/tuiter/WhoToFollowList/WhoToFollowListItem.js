const WhoToFollowListItem = (who) =>{
    return (`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2"><img src="${who.avatarIcon}" width="55px" height="55px"  class="rounded-circle text-center"></div>
            <div class=" col-6">
                <div class="row">
                    <div class="col-12 fw-bold">${who.userName} <i class="fa-solid fa-check"></i></div>
                    <div class="row">
                        <div class=" col-12">${who.handles}</div>
                    </div>
                </div>
                </div>
            <div class="col-4">
                <button class="bg-primary text-white border-0 rounded-pill fw-light">Follow</button>
            </div>
        </div>
    </li>`);
}
export default WhoToFollowListItem;



