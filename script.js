function tweetMessage() {
    const message = "EMMY 365 Concept Photo \n#EmmyBNK48 #2024_365NichinoKamihikoukiTH ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
}  
