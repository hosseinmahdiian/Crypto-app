const Convert = (data, type) => {

    const converted = data.map((item) => {
        return {
            date : item[0],
            [type] : item[1],
        }
    })

    return converted
};

export { Convert };
