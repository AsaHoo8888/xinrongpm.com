export const productNav = [
  "PE Pipe Extrusion Line",
  "PVC Pipe Extrusion Line",
  "PVC-O Pipe Extrusion Line",
  "PPR Pipe Extrusion Line",
  "Double Wall Corrugated Pipe Extrusion Line",
  "PE Hollow Wall Winding Pipe Extrusion Line",
  "PEX-AL-PEX Pipe Machine",
  "RTP/TCP Pipe Production Line",
  "Automatic Pipe Drilling/Slotting Machine",
];

const homeProductImagePath = "/images/home-products";
const standardHomeProductImageSize = {
  imageWidth: 1300,
  imageHeight: 1000,
  hoverImageWidth: 1300,
  hoverImageHeight: 1000,
};

function productKey(value = "") {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const homeProductMedia = {
  "pe-pipe-extrusion-line": {
    ...standardHomeProductImageSize,
    image: `${homeProductImagePath}/pe-pipe-extrusion-line-machine.jpg`,
    hoverImage: `${homeProductImagePath}/pe-pipe-final-product.jpg`,
    imageAlt: "Xinrongplas PE pipe extrusion line machine",
    hoverImageAlt: "Finished PE pipe produced by Xinrongplas PE pipe extrusion line",
  },
  "pvc-pipe-extrusion-line": {
    ...standardHomeProductImageSize,
    image: `${homeProductImagePath}/pvc-pipe-extrusion-line-machine.jpg`,
    hoverImage: `${homeProductImagePath}/pvc-pipe-final-product.jpg`,
    imageAlt: "Xinrongplas PVC pipe extrusion line machine",
    hoverImageAlt: "Finished PVC pipe produced by Xinrongplas PVC pipe extrusion line",
  },
  "pvc-o-pipe-extrusion-line": {
    ...standardHomeProductImageSize,
    image: `${homeProductImagePath}/pvc-o-pipe-extrusion-line-machine.jpg`,
    hoverImage: `${homeProductImagePath}/pvc-o-pipe-final-product.jpg`,
    imageAlt: "Xinrongplas PVC-O pipe extrusion line machine",
    hoverImageAlt: "Finished PVC-O pipe produced by Xinrongplas PVC-O pipe extrusion line",
  },
  "ppr-pipe-extrusion-line": {
    ...standardHomeProductImageSize,
    image: `${homeProductImagePath}/ppr-pipe-extrusion-line-machine.jpg`,
    hoverImage: `${homeProductImagePath}/ppr-pipe-final-product.jpg`,
    imageAlt: "Xinrongplas PPR pipe extrusion line machine",
    hoverImageAlt: "Finished PPR pipe produced by Xinrongplas PPR pipe extrusion line",
  },
  "double-wall-corrugated-pipe-extrusion-line": {
    ...standardHomeProductImageSize,
    image: `${homeProductImagePath}/double-wall-corrugated-pipe-extrusion-line-machine.jpg`,
    hoverImage: `${homeProductImagePath}/double-wall-corrugated-pipe-final-product.jpg`,
    imageAlt: "Xinrongplas double wall corrugated pipe extrusion line machine",
    hoverImageAlt:
      "Finished double wall corrugated pipe produced by Xinrongplas extrusion line",
  },
  "pe-hollow-wall-winding-pipe-extrusion-line": {
    ...standardHomeProductImageSize,
    imageWidth: 2560,
    imageHeight: 1920,
    image: `${homeProductImagePath}/pe-hollow-wall-winding-pipe-extrusion-line-machine.jpg`,
    hoverImage: `${homeProductImagePath}/pe-hollow-wall-winding-pipe-final-product.jpg`,
    imageAlt: "Xinrongplas PE hollow wall winding pipe extrusion line machine",
    hoverImageAlt:
      "Finished PE hollow wall winding pipe produced by Xinrongplas extrusion line",
  },
  "pex-al-pex-pipe-machine": {
    ...standardHomeProductImageSize,
    image: `${homeProductImagePath}/pex-al-pex-pipe-machine.jpg`,
    hoverImage: `${homeProductImagePath}/pex-al-pex-pipe-final-product.jpg`,
    imageAlt: "Xinrongplas PEX-AL-PEX pipe machine",
    hoverImageAlt: "Finished PEX-AL-PEX composite pipe produced by Xinrongplas machine",
  },
  "rtp-tcp-pipe-production-line": {
    ...standardHomeProductImageSize,
    image: `${homeProductImagePath}/rtp-tcp-pipe-production-line-machine.jpg`,
    hoverImage: `${homeProductImagePath}/rtp-tcp-pipe-final-product.jpg`,
    imageAlt: "Xinrongplas RTP TCP pipe production line machine",
    hoverImageAlt: "Finished RTP TCP pipe produced by Xinrongplas production line",
  },
  "automatic-pipe-drilling-slotting-machine": {
    ...standardHomeProductImageSize,
    image: `${homeProductImagePath}/automatic-pipe-drilling-slotting-machine.jpg`,
    hoverImage: `${homeProductImagePath}/automatic-pipe-drilling-slotting-final-product.jpg`,
    imageAlt: "Xinrongplas automatic pipe drilling and slotting machine",
    hoverImageAlt: "Finished slotted pipe made by Xinrongplas pipe drilling machine",
  },
};

export function attachHomeProductMedia(product) {
  const media = [product?.slug, product?.name, product?.title]
    .map(productKey)
    .map((key) => homeProductMedia[key])
    .find(Boolean);
  return media ? { ...product, ...media } : product;
}

export const fallbackHome = {
  hero: {
    eyebrow: "Global manufacturing leader",
    title: "Leading Brand in Plastic Pipe Extrusion Machinery Since 1996",
    text: "Over 28 years of technical expertise, serving infrastructure and manufacturing partners across 80+ countries with 60,000 sqm of advanced production capability.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAohng-_INKVdMmkS5hp9uQUAvD6nq23V5WaUDFiLeoOJLW6cmB5ij4i9rnaSa_JBJfjlPL7kQKJJvIBnCRZUUlrBUIC6eqFmr_QNZzocBNADrQMNIaOnxbXqgmV2wsgaLKx1vf9BcOBiSv17Sw1_iL011mfs2Ve3QnxsqAtCXaZJeQZpbj2_Xsp72J7yOicKO3H8HpX-1c7GngPtFRA9G1h3YBzgKHaMMsAe7UvJKBH5hpN3CxekM3cMVApPK2SQb3DPBlSNT1dzc",
  },
  stats: [
    { value: "28+", label: "Years Experience" },
    { value: "60,000 sqm", label: "Modern Workshop" },
    { value: "200+", label: "Skilled Employees" },
    { value: "50+", label: "R&D Patents" },
  ],
  intro: {
    title: "Our Main Products",
    text: "Xinrong is a leading plastic pipe extrusion machinery manufacturer in China, continuously focusing on plastic extrusion machinery for more than 28 years. You not only find better extrusion lines at a good price, but also get considerate and comprehensive services.",
  },
  products: [
    {
      name: "PE Pipe Extrusion Line",
      range: "OD 16-2000 mm",
      tag: "Final product",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCvsvN3ddHvLUz1Yvj-jaG1SUleZJnI3IQLIJnpUj3tOZ8nO8CRuCc8JSfMBboSVa4vJzr-NV4gBz1SnjxZxz_NHu47p-x09iKieAvw1KzB7QQLUiOzkGZ-UBnsYid02OHH66Dnf4ICBTwxTXXCk24OTKedpyJ4fGjMvePpRYnAqbIwcJUsJizZczMeF8KipD591PntBarLgeWNFEdaCpF6n1UH2ZT36iTWi3gmLlBMcO_1A6XMW6VzwazzllwRcK0skGEIzxf9JiE",
    },
    {
      name: "PVC Pipe Extrusion Line",
      range: "OD 16-1000 mm",
      tag: "Final product",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBV39dYcsiC9VkURmk5L_ZhTv99tht1Zmh6YeTKlLmZIV6Pfx_Owu0vwbA7NX1CKdWatus1z7nS355jgm_9F25sfVtwLXdnW9_VDp2vnX3yMGgafKdrf7Zh88-bLNbyDdAGnrPt08bxKiLSkotBActA64zHPG4MkoGovTSmbp6vo4_JXBIZDtKb4v0tMMPLMBT7IDHZBjM-2Kc0YtPGKF_NLdYdnIsUJd3-XsY3if7Jl-7dsCpRZu5JVqrXzh6hCRQzFDIZdk4Fd3k",
    },
    {
      name: "PVC-O Pipe Extrusion Line",
      range: "OD 110-630 mm",
      tag: "High material grade",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZtROMBm7wDblS0c8KOv1IQuZ3t1WTDZ7QdDUXg96QR_G2MqFH2gEi9NXs75icu1SdTWNrhQykD2GdeVjYd8ruBensl0LrlykOjVW31QpxJAexDnr1uSBHRNwzQ7D4iK28Ss52BRPXbboeXFhWRNmdjfm7K3INAsJ-5e794XzIAlhyS5xGum4lt_FdS7Ha-w99PeJE6HIxjAS0XedkMQnhISxfQVETzaFrqswvDhU5ptwl0qXfct_L9kuXiaGsM956tAVXqWpbBDA",
    },
    {
      name: "PPR Pipe Extrusion Line",
      range: "OD 16-160 mm",
      tag: "Final product",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAohng-_INKVdMmkS5hp9uQUAvD6nq23V5WaUDFiLeoOJLW6cmB5ij4i9rnaSa_JBJfjlPL7kQKJJvIBnCRZUUlrBUIC6eqFmr_QNZzocBNADrQMNIaOnxbXqgmV2wsgaLKx1vf9BcOBiSv17Sw1_iL011mfs2Ve3QnxsqAtCXaZJeQZpbj2_Xsp72J7yOicKO3H8HpX-1c7GngPtFRA9G1h3YBzgKHaMMsAe7UvJKBH5hpN3CxekM3cMVApPK2SQb3DPBlSNT1dzc",
    },
    {
      name: "Double Wall Corrugated Pipe Extrusion Line",
      range: "OD 63-1200 mm",
      tag: "Drainage system",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCvsvN3ddHvLUz1Yvj-jaG1SUleZJnI3IQLIJnpUj3tOZ8nO8CRuCc8JSfMBboSVa4vJzr-NV4gBz1SnjxZxz_NHu47p-x09iKieAvw1KzB7QQLUiOzkGZ-UBnsYid02OHH66Dnf4ICBTwxTXXCk24OTKedpyJ4fGjMvePpRYnAqbIwcJUsJizZczMeF8KipD591PntBarLgeWNFEdaCpF6n1UH2ZT36iTWi3gmLlBMcO_1A6XMW6VzwazzllwRcK0skGEIzxf9JiE",
    },
    {
      name: "PE Hollow Wall Winding Pipe Extrusion Line",
      range: "OD 200-3000 mm",
      tag: "Large diameter",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBV39dYcsiC9VkURmk5L_ZhTv99tht1Zmh6YeTKlLmZIV6Pfx_Owu0vwbA7NX1CKdWatus1z7nS355jgm_9F25sfVtwLXdnW9_VDp2vnX3yMGgafKdrf7Zh88-bLNbyDdAGnrPt08bxKiLSkotBActA64zHPG4MkoGovTSmbp6vo4_JXBIZDtKb4v0tMMPLMBT7IDHZBjM-2Kc0YtPGKF_NLdYdnIsUJd3-XsY3if7Jl-7dsCpRZu5JVqrXzh6hCRQzFDIZdk4Fd3k",
    },
    {
      name: "PEX-AL-PEX Pipe Machine",
      range: "OD 16-63 mm",
      tag: "Composite pipe",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZtROMBm7wDblS0c8KOv1IQuZ3t1WTDZ7QdDUXg96QR_G2MqFH2gEi9NXs75icu1SdTWNrhQykD2GdeVjYd8ruBensl0LrlykOjVW31QpxJAexDnr1uSBHRNwzQ7D4iK28Ss52BRPXbboeXFhWRNmdjfm7K3INAsJ-5e794XzIAlhyS5xGum4lt_FdS7Ha-w99PeJE6HIxjAS0XedkMQnhISxfQVETzaFrqswvDhU5ptwl0qXfct_L9kuXiaGsM956tAVXqWpbBDA",
    },
    {
      name: "RTP/TCP Pipe Production Line",
      range: "OD 50-630 mm",
      tag: "Reinforced pipe",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAohng-_INKVdMmkS5hp9uQUAvD6nq23V5WaUDFiLeoOJLW6cmB5ij4i9rnaSa_JBJfjlPL7kQKJJvIBnCRZUUlrBUIC6eqFmr_QNZzocBNADrQMNIaOnxbXqgmV2wsgaLKx1vf9BcOBiSv17Sw1_iL011mfs2Ve3QnxsqAtCXaZJeQZpbj2_Xsp72J7yOicKO3H8HpX-1c7GngPtFRA9G1h3YBzgKHaMMsAe7UvJKBH5hpN3CxekM3cMVApPK2SQb3DPBlSNT1dzc",
    },
    {
      name: "Automatic Pipe Drilling/Slotting Machine",
      range: "OD 50-630 mm",
      tag: "Auxiliary equipment",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCvsvN3ddHvLUz1Yvj-jaG1SUleZJnI3IQLIJnpUj3tOZ8nO8CRuCc8JSfMBboSVa4vJzr-NV4gBz1SnjxZxz_NHu47p-x09iKieAvw1KzB7QQLUiOzkGZ-UBnsYid02OHH66Dnf4ICBTwxTXXCk24OTKedpyJ4fGjMvePpRYnAqbIwcJUsJizZczMeF8KipD591PntBarLgeWNFEdaCpF6n1UH2ZT36iTWi3gmLlBMcO_1A6XMW6VzwazzllwRcK0skGEIzxf9JiE",
    },
  ],
};
