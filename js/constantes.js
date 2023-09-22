const REST_ADR = "http://localhost";
const REST_PORT = "5679";
export const REST_RESSOURCES=Object.freeze({
    memes:'/memes',
    images:'/images'
})
const REST_ADR_FULL= `${REST_ADR}:${REST_PORT}`
export default REST_ADR_FULL;
