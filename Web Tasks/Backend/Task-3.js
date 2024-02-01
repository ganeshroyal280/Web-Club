function fetchData() {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve('Data from async operation');
    }, 1000);
    });
    }
    async function main() {
    try {
    const initialData = 'Initial Data';
    const additionalData = await fetchData();
    const finalResult = `${initialData} + ${additionalData}`;
    console.log('Final Result:', finalResult);
    } catch (error) {
    console.error('Error:', error.message);
    }
}
main();