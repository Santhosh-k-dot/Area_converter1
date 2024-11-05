document.getElementById('converterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const value = parseFloat(document.getElementById('valueInput').value);
    const fromUnit = document.getElementById('fromUnitSelect').value;
    const toUnit = document.getElementById('toUnitSelect').value;
    let conversionFactor = 1; // Default conversion factor

    // Define conversion factors for each unit pair
    const conversionFactors = {
        'Square Feet': {
            'Square Feet': 1,
            'Acres': 2.2957e-5,
            'Hectares': 9.2903e-6,
            'Square Meters': 0.092903,
            'Cents': 0.00229568,
            'Guntas': 0.000918273,
            'Kanals': 4.5425e-5,
            'Marlas': 0.00181809,
            'Gaj': 0.111111
        },
        'Acres': {
            'Square Feet': 43560,
            'Acres': 1,
            'Hectares': 0.404686,
            'Square Meters': 4046.86,
            'Cents': 100,
            'Guntas': 40,
            'Kanals': 2.0,
            'Marlas': 160,
            'Gaj': 4840
        },
        'Hectares': {
            'Square Feet': 107639,
            'Acres': 2.47105,
            'Hectares': 1,
            'Square Meters': 10000,
            'Cents': 247.105,
            'Guntas': 99.1736,
            'Kanals': 4.945,
            'Marlas': 394,
            'Gaj': 11959.89
        },
        'Square Meters': {
            'Square Feet': 10.7639,
            'Acres': 0.000247105,
            'Hectares': 0.0001,
            'Square Meters': 1,
            'Cents': 0.0247105,
            'Guntas': 0.00991736,
            'Kanals': 0.000494211,
            'Marlas': 0.0197684,
            'Gaj': 1.19599
        },
        'Cents': {
            'Square Feet': 435.6,
            'Acres': 0.01,
            'Hectares': 0.00404686,
            'Square Meters': 40.4686,
            'Cents': 1,
            'Guntas': 0.4,
            'Kanals': 0.02,
            'Marlas': 1.6,
            'Gaj': 48.4
        },
        'Guntas': {
            'Square Feet': 1089,
            'Acres': 0.025,
            'Hectares': 0.010117,
            'Square Meters': 101.171,
            'Cents': 2.5,
            'Guntas': 1,
            'Kanals': 0.05,
            'Marlas': 4,
            'Gaj': 121
        },
        'Kanals': {
            'Square Feet': 5445,
            'Acres': 0.5,
            'Hectares': 0.202343,
            'Square Meters': 2023.43,
            'Cents': 50,
            'Guntas': 20,
            'Kanals': 1,
            'Marlas': 80,
            'Gaj': 605
        },
        'Marlas': {
            'Square Feet': 272.25,
            'Acres': 0.00625,
            'Hectares': 0.00252929,
            'Square Meters': 25.2929,
            'Cents': 0.625,
            'Guntas': 0.25,
            'Kanals': 0.0125,
            'Marlas': 1,
            'Gaj': 30.25
        },
        'Gaj': {
            'Square Feet': 9,
            'Acres': 0.000206611,
            'Hectares': 8.3613e-5,
            'Square Meters': 0.83613,
            'Cents': 0.0206611,
            'Guntas': 0.00826446,
            'Kanals': 0.000412834,
            'Marlas': 0.0165134,
            'Gaj': 1
        }
    };


    if (conversionFactors[fromUnit] && conversionFactors[fromUnit][toUnit]) {
        conversionFactor = conversionFactors[fromUnit][toUnit];
    }

    const convertedValue = value * conversionFactor;
    document.getElementById('result').innerText = `${value} ${fromUnit} is equal to ${convertedValue} ${toUnit}`;
});