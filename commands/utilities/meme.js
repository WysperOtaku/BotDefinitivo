const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    name: "meme",
    async execute(msg, args) {
        
        args.slice(1);
        let reddit = args[0];

        if(reddit == null) {
            reddit = "shitposting";
            msg.channel.send(`Como no me has dicho reddit ire a buscar el meme a ${reddit}.`);
        }

        try {
            const response = await fetch(`https://www.reddit.com/r/${reddit}/new.json?limit=100`);
            const data = await response.json();

            const posts = data.data.children;

            const validPosts = posts.filter(p => {
                const url = p.data.url;
                const hint = p.data.post_hint;
                return (
                    url.endsWith(".jpg") ||
                    url.endsWith(".jpeg") ||
                    url.endsWith(".png") ||
                    url.endsWith(".gif") ||
                    url.endsWith(".mp4") ||
                    hint === "image" ||
                    hint === "hosted:video"
                );
            });

            if (!validPosts.length) {
                return msg.channel.send("No tengo memes para ti 😢.");
            }

            const post = validPosts[Math.floor(Math.random() * validPosts.length)];
            const postData = post.data;
            const postLink = `https://reddit.com${post.data.permalink}`;

            let url = postData.url;

            if (postData.secure_media && postData.secure_media.reddit_video) {
                url = postData.secure_media.reddit_video.fallback_url;
            }

            await msg.channel.send({
                content: `[Ver post en Reddit](${postLink})\n${post.data.title}`,
                files: [url]
            });

        } catch (error) {
            console.error("Error al obtener el meme:", error);
            msg.channel.send("OSTIA PUTA QUE MAREO! No he encontrado nada... 😵");
        }
    }
}