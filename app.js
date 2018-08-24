new Vue({ 
    el: "#app",
    data: {
        posts: [],
        currentPost: {}
    },
    created() {
        $.get("https://www.reddit.com/r/all/top.json?limit=50", (res) => {
            this.posts = res.data.children;
            this.currentPost = this.posts[0];
        });
    },
    methods: {
        goToPost(index) {
            this.currentPost = this.posts[index];
        },
        dismissPost(index) {
            this.posts.splice(index, 1);
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
        },
        getMediaSource(itemData) {
            const image = itemData.preview.images[0];
            return (image.variants.gif && image.variants.gif.source) || image.source;
        }
    }
})