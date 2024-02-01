export function convertWindSpeed(speedInMS: number): string {
    const speedInKMH = speedInMS * 3.6
    return `${speedInKMH.toFixed(0)}km/h`
}