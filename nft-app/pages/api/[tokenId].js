export default function handler(req, res) {
  // get the tokenId from the query params
  const tokenId = req.query.tokenId;
  // As all the images are uploaded on github, we can extract the images from github directly.
  const image_url =
    "https://raw.githubusercontent.com/omelbourne/nft-Collection/main/nft-app/public/antiparallel/";
  // The api is sending back metadata for an antiparallel
  // To make our collection compatible with Opensea, we need to follow some Metadata standards
  // when sending back the response from the api
  // More info can be found here: https://docs.opensea.io/docs/metadata-standards
  res.status(200).json({
    name: "Antiparallel #" + tokenId,
    description: "Antiparallel is an NFT collection for those that like the cards!",
    image: image_url + tokenId + ".png",
  });
}