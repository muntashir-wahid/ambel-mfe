import styles from "./Partners.module.css";

const partners = [
  {
    id: "1",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/1b68/ddd1/5d41d7ce66fc972093e78713fa7a473a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqAA91Jh2zkWHH2HRVhqjkHcPvyWdScneR2sh~d0jGxHpnaE6-GXVYbqWzfKYrniSA7Hb7dfaDyFhUSsqcNVMLnrnU6O5~8RKBJZ78HliGDTS7uYy0en9t-XVw2N7nEX5LE5rfPHPgew3-xC9JfjqnVx6lVdyCJd-mFXmHPtTsOPHMEKiSksEPdW7fsYYIfPze7tfPLy6-xMV1ENSvtT2OAlELreaD6SLThI9QAXEAXaOSjVooNKT0lk1r7XhDrDkAX9gxUsggVh1jmylE9hvmhvECg3rakcxPleHG5UHv7xKj3rG-2r2t1oHJzymsBynyEDwZwove~r8wBmK7THoA__",
  },
  {
    id: "2",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/0cf3/059a/b4673add56eeb264bb5a506e0c1bace2?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bAykddy8bGneF8wlzPC2idu-KJ~m8PMO-5zn9E8prBW9EY0tu6Ban1CdAjWj2VwhPpOdwgy0cIUOgO6LvnVwcFG5uXSscAA6FghSRSHq1bU5jVXpZxq3U-rcAHBpRXdhg7BoqrMdV7OsWLQeusLAtHQIQ7wE8KZC07ZXo3cRHXGh0v-8wJX1mTPXLBCthIUmASLSGceDKrbVVCiOYWYQUUIXWXSlIVCtVXGlqL57n84KM7Gny8nHMRhxfq7JnqJxa5vszgBb3xdY5AR7aZA1RbH~t-pUfCfycL~Kzzo64BWuPJxZc4Fvdha1KBysxmWuqyZqTav33P-mFl0WXZk4kA__",
  },
  {
    id: "3",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/d826/720b/9032f2925277bdcb1a3d104f6a83315f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zjm2l-MpCNckq4WxRkqHdcPW22kxGeqq-R94G-s1yp69aae9aXIAFu~f1tvKTisXmj~2JsaL7dcqnLRvGgDbYHpYKacIqVVmKmAswnQ3GpQOqtTeXxS1jXrMyoZkx3JienQ9AC0z71SA~aHEjPTSKsd5pdDjLOAa1xvrnLN3B-HQUwMH8chRLRdEtjX89UIcYQLFvGLLG8aagLW3DWAstlhaKsCwCzSwRTw9GZr2CrtGw2y8-HTXcyOm3lsHq8NKs8o6MSfIXp4tmGi9NDdE1FZE3lDLdlCS8R2ctzloT5KO-8jgtbR4RLYoCVcyHf1lh-xGDkKO94GBez9uk7Ebdw__",
  },
  {
    id: "4",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/ff83/13f9/c05f9d2deb2352c5046cdcbc44954d5c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GI3YZc3ao-LGV0ovDU2hO4CoBLrQrkOqWIN1U0IqcHkd-tZ5telFE5BoFTkwlOtnGnSpEkTltu499W-AtPoeZU7gpSZp5ulbxDgGJvnhVkwi8k-5OwmQjSbxlvbGgA5XSHhxvgyr2UMH14AiEikcDKCHCEsk4vYg1BzdnOJenzEWmSAbeWU8wGrw7iAXXIb34qGytWPGzi5jcBaMkbz8zSM-Dzn7-Fb8Csnmiezg~1oMsrQS82HifSEhNRwGwpR2Yij--wZyLxCISfekzvE5i~58LnBjA2L0wYvw~iI12Xew8QGYg9iRiVfmP47bJ1Y-B8rV5CJY4aNBjxzggn3ZxA__",
  },
  {
    id: "5",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/f912/412e/39e5eaae575b15d4538e298cb5658252?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pFYwC8HIuH1oqzX-JpyUqRqBNxRfZ8aSZd1R0Gck-PLlX0dFpqlrOyjwHEIZQjPHATa2YNGrbEmWJM0JXfDju2Vc3wGEIdC25F3v9uK7iGZ3f84HA00UfJTErO3cRMb5GBGLKiElNR-jTAFVS3DHMyxpFH~EqLh0NvXfYfP2f3jjCLTB0x9QV-I7KZI1DQzdv5zczSyKbkWVfb7VH-q8-lV6b-XzOpemnSITqicgDbTisjPw0~Ku1jJo01a2JXqym~c8LO-xB5GbAAuIhhQSyd1pqXSQZ3i9y30m3QubcNGEwC~KEcRZZ6VxJ-T4NbrBmD8kQkKFiM2lVAALE~I3WA__",
  },
  {
    id: "5",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/326d/457b/3ead632fc76b0ee3bd0929a54e32ce51?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NlcbC53nvS235j1uKf6oKDQzfYiMIJaCIHMhqhnsCE5dkd4slaZn5UbEMZqSDpEa0suRJOrndOWgSE3Z1lVFIA1DObLBYIUBUsx894PQRw6d3jBx8PeSJPImo-HqR67kV4cOzNqfOAvTNhEaQO8hAdD4DU1LVVAOxjFfrU5nYGGp3Ii2bdU93xzZdnCwS~2GU7ZIEgr~B5eZbjzdIlVTmVEMoB6l9Ox~yOor9r-PpHkJDOvHYWaqEqMx~lKYfrKKQqe4zaIfvVkVdgA3V0RhCAo7Md23vqw1QcaDyS9kKoYSMOUzv5You59vyELlMi77xfeF8Y1UhTk0Pe~SvW-Jlw__",
  },
];

const Partners = () => {
  return (
    <section className={styles["partners-container"]}>
      <div className={styles["partners-content"]}>
        <h5 className={styles["partners-heading"]}>
          Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses all over
          the World
        </h5>

        <div className={styles["partners-card-container"]}>
          {partners.map((partner) => (
            <div className={styles["partners-card-container"]} key={partner.id}>
              <img className={styles["partners-img"]} src={partner.imgUrl} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
