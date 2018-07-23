const faker = require('faker');

function generateMockData(count) {
    const data = [];

    for (let i = 0; i < count; i++) {
        data.push({
            _id: i,
            name: faker.company.companyName(),
            rent: 500 + Math.floor(Math.random() * 1000),
            address: faker.address.streetAddress(),
            amenities: [
                faker.company.bs(),
                faker.company.bs()
            ],
            contactInfo: {
                name: faker.name.findName(),
                phone: faker.phone.phoneNumber()
            },
            applicationUrl: faker.internet.url(),
            pictures: [
                faker.image.business(),
                faker.image.business(),
                faker.image.business(),
                faker.image.business()
            ]
        })
    }

    return data;
}

console.log(JSON.stringify(generateMockData(100), undefined, 4));
