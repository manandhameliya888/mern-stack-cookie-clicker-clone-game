function calculateReward() {
    const random = Math.random();
    const points = random < 0.5 ? 10 : 1;
    const isPrize = random < 0.25;

    return { points, isPrize };
}

module.exports = { calculateReward };
