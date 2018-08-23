new Vue({ 
    el: "#app",
    data: {
        posts: []
    },
    created() {
        $.get("https://www.reddit.com/r/all/top.json?limit=50", (res) => {
            this.posts = res.data.children;
        });
    },
    methods: {
        goToPost(index) {
            console.log("CLICKED POST", index)
        },
        dismissPost() {
            console.log("DISMISS POST")
        },
        hasThumbnail(itemData) {
            return itemData.thumbnail.includes("http://") || itemData.thumbnail.includes("https://");
        },
        hoursPassed(created) {
            let diff = (new Date().getTime() / 1000) - new Date(created).getTime();
            diff /= (60 * 60);
            return Math.abs(Math.floor(diff));
        },
        getPostHtml(html) {
            return html ? _.unescape(html) : null;
        }
    }
})