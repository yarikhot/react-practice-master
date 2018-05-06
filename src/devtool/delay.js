export default function Delay(ms = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms);
    });
}
