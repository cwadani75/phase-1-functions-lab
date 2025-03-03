// Function to calculate distance in blocks from HQ (42nd Street)
const distanceFromHqInBlocks = (pickup) => Math.abs(pickup - 42);

// Function to calculate distance in feet from HQ
const distanceFromHqInFeet = (pickup) => distanceFromHqInBlocks(pickup) * 264;

// Function to calculate the distance traveled in feet between two locations
const distanceTravelledInFeet = (start, destination) => Math.abs(start - destination) * 264;

// Function to calculate fare price based on distance traveled
const calculatesFarePrice = (start, destination) => {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) return 0; // Free ride
    if (distance <= 2000) return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    if (distance <= 2500) return 25; // Flat rate for rides over 2000 feet
    return 'cannot travel that far'; // Over 2500 feet not allowed
};

// Exporting functions for testing
module.exports = { distanceFromHqInBlocks, distanceFromHqInFeet, distanceTravelledInFeet, calculatesFarePrice };
