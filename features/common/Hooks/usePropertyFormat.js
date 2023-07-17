export const usePropertyFormat = (property) => {
    const id = property._id;
    const title = property.title;
    const description = property.description;
    const propertyType = property.propertyType;
    const propertyStatus = property.propertyStatus;
    const address = property.location;
    const rooms = property.rooms;
    const baths = property.baths;
    const price = property.price.toLocaleString("en-Us", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });

    const gateHouse = property.gateHouse;
    const area = property.area;
    // const date = property.date.substring(0, 10);

    const coverVideo = property.video;
    const youTubeVideo = coverVideo.slice(coverVideo.length - 11);
    const panorama = property.panorama;

    const coverPhoto = property.images[0];
    const photos = property.images?.map((image) => image || []);

    // Additional fees
    const legalDoc = property.legalDoc.toLocaleString("en-Us", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });
    const structuralDrawing = property.structuralDrawing.toLocaleString("en-Us", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });
    const surveyPrice = property.surveyPrice.toLocaleString("en-Us", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });
    const certificationFee = property.certificationFee.toLocaleString("en-Us", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });
    const devFee = property.devFee.toLocaleString("en-Us", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });
    const meFeeDuplex = property.meFeeDuplex.toLocaleString("en-Us", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });
    const meFeeBungalow = property.meFeeBungalow.toLocaleString("en-Us", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });
    const archFeeDuplex = property.archFeeDuplex.toLocaleString("en-Us", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });
    const archFeeBungalow = property.archFeeBungalow.toLocaleString("en-Us", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });
    const approvalBungalow = property.approvalBungalow.toLocaleString("en-Us", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });
    const approvalDuplex = property.approvalDuplex.toLocaleString("en-Us", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });

    
  return {
        id,
        address,
        title,
        description,
        propertyType,
        propertyStatus,
        price,
        coverPhoto,
        rooms,
        baths,
        gateHouse,
        area,
        panorama,
        photos,
        legalDoc,
        /*
        date,*/
        youTubeVideo, 
        structuralDrawing,
        surveyPrice,
        certificationFee,
        devFee,
        meFeeDuplex,
        meFeeBungalow,
        archFeeDuplex,
        archFeeBungalow,
        approvalBungalow,
        approvalDuplex,
    };
};

// FOR RAPID API
/* 
 const address = property.location.map((item) => item.name).join(", ");
    const coverPhoto = property.coverPhoto.url;
    const propertyType = `${property.category[0].name}, ${property.category[1].name}`;
    const price = property.price.toLocaleString("en-Us", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });

    const title = property.title;
    const rooms = property.rooms;
    const baths = property.baths;
    const purpose = property.purpose;
    const sqSize = property.area.toFixed(2);
    const externalID = property.externalID;

    const photos = property.photos?.map((photo) => photo.url) || [];
    const description = property.description;
    const coverVideoUrl = property.coverVideo.url;
    const coverVideo = coverVideoUrl.slice(coverVideoUrl.length - 11);
    const panorama = property.panoramas?.length? property.panoramas[0].url : [];
    const amenities = property.amenities?.flatMap(({amenities}) => amenities).map((item) => item);
    const furnished = property.furnishingStatus;
*/