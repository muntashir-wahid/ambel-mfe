import { RxExternalLink } from "react-icons/rx";

import styles from "./Industries.module.css";

const workingIndustries = [
  { label: "Doctor", value: "DOCTOR" },
  { label: "Lawyer", value: "LAWYER" },
  { label: "Spa & Salon", value: "SPA-AND-SALON" },
  { label: "Therapist", value: "THERAPIST" },
  { label: "Fitness", value: "FITNESS" },
  { label: "Instructor", value: "INSTRUCTOR" },
  { label: "Consultancy", value: "CONSULTANCY" },
];

const industries = [
  {
    id: "2",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/ab81/4f5b/2816f6e58af3e797d928d60978c06e42?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A5KBY~oEFv0IvJIaFtwW138-h8n2MGNgS9Fn24kshjg8gaEcgdwnV5Uq2JaOfv20ifDuWBf42wq24u6Hqehw--GwQqtzWizRUEruNFsue1n65tAxFQfijLSkbQU965elqSiopV1SgvnTXrdMceD9ojQFT3GU7ypNkKshSYtw3aWbfXeDNWNw8qepQzQK-dBI9vYr-DodNwhOCnGb~s2IrOT65neEF6yY6lym-0CxhoXvZLHYqXPDKqWOWwhiBgMLZ0Sb7SaJUtxdnUxIcF-yQOniEY-BKalaKsOXh-le~rBlyefAE3d4-xHmTA43-qhIL5cZRlueL~y2e~FaZyz-fQ__",
  },
  {
    id: "3",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/e34f/dbb9/fd1900d5b44f1b513962ade6d29511f4?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZfMkseYzxUEPew5C1M-MLsS0zPc0lE4dACvLJqHX3gktHrNThAADBU7vdefd9iwuh0lrNXRlfkYbhlccpOXeJN0WYKC1N9avF3m8zxUaC2O32Biu-ttg0q~V2sfIc7Fi0fPFQ5WnWV44-zj18HIz3IY2cycnly40~QtOVacWYKpKnE3tsiM~p8gtq-OWEJvqGUt9XvBNaDS7TqUDXcacihU9ZIgZd19GpQAdb5~wLpd4R6Rd8KL4Zm0HXs2~0IvI-Nf7nOdtvFQiFpUMVsCaB4XTESc0VjC5hhucQj5lbHsaizvLn5hs~JrKEKliVrtaJbqocqaqZZlI96eHupEIw__",
  },
  {
    id: "4",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/4c70/4add/e9b7c1f470a904ef0d7e4ea60f8abb93?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjD1eUInZs5FjQ1HUn-zxveSWNoMwzwp-BLGUvbjDeI4RHJkyGaq27iTlphC9t~47uVKDwpWYMURYW-IxdjmRn7mwe1fYSL4zcY14wu5u55shYHZ8eS6QL~XY-XzpJUxt~wLz5OZIJtAm3QcGQ3i3xvcLoNgeHv1orbgWYAX7cjg700z19oH6P3WNWd08A5Gg0UWVs2PUEYxhrJmpCM-f2NeTfWSAnlGhI0yBtKV7EiZhlljVs~2m4FqFOdPBK4zeseMWl0ra9tyPssVtcmFwgKO~dIjd144ytRw2DJqmLEPjtd6Wu7uSin17j~8NnGafCOqgUjnaUrKIQTDgO~sUw__",
  },
  {
    id: "5",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/bc07/be2a/1a4083c0ed9cc3f77990024586d7028c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F~bSUMuf7cLph9ptn3KHx5nxg5YExhogw9dMsse-R-FpqSk4yYNVa0kxYvSI8OM3XdPWj5dorZoWVJei3iOAsoa1BKDB4dDhRRONfRiVlKAPcBjZ7~qcIy-ZF-xVilutDfY7HOCpE7FnDo3V3TEWioHGhtnFR2BklQMfOSfEHwfC30UcVJClds-NFbcrl63T0amWljI23zLzLeUKtKN6m0cJFb-azv~1wDVYcG~SKhNTRjqLXUuYpyuWhTcpSbwI0cfROozjIT3C8Np8YL5GvrpaJYslfvh7OalUNx27MgwL0PcWhJRgSdEKsWvIb-ZlNaToejIXOSXh7RPYRcKpaA__",
  },
  {
    id: "6",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/c1d7/e1cc/55c54d4ffd58fe78df42b0cc93522c3e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q8kAg7Dnr3QY~X7dljbZ0qATpLYD6G1Ew9Eq2uypoJCm2oJiIcEa-HV85JujpuR2W1VpyjQFJl-kJtkK4G1zQGO4JILta50~E~U5f5W-PMgskicMRnSnkGIUyrixe~tjB17LU59WY31-G3Q815M4RJ2L07mWchTj8O4EMgB~hMGCGRvu2yjewRQM~LGV2Y2sF3He4h6lcuVasgK7XjU61cNXtU8lrfDMVjeumq0a8P3lio0RFdoyqAqYtPJ0Ml3H~-AJtyEC2Z7GSPAbaiv7mQYGAAkEFtiEnZdayArjelWyFadtTa~EYGEfZpChB6wPC8pxOXt1086ODDqmIgYpfQ__",
  },
  {
    id: "7",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/910f/4706/fdc2bdc7955e97012fe87e8077b93df9?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kodcdqXWW1GMn6MylDsSTSV04~0LvnuBFVE-ZnKEPnJBMS3~cbgZz4akHHOlyq99fz~95uXOPVaGxqwwvfJWokZsG1XCqJ~AY9uEfBIo9T6oFGolCQAK7Dhb3xoj4zvmYEN~GzmSSkh6mHbTtGR-4D1d5wlef9h7NVtygq2LBT60pnaD2NbRe4xFPbFqXR3dmll2KHXM~8ovg~lx-mtoz4RyUPRDNINWpD5Br1E0iTM1jBWnzeGBsZMkf~A9CqIvhpSnOqGYCORGFTHYAmL4MbP5hkkso0of5XEwJhafWy8lCJ8-v95qlLClISB95hb1dLaP9SSrb-Oj71Omq3Df-g__",
  },
];

const Industries = () => {
  return (
    <section className={styles["industries-container"]}>
      <header className={styles["industries-header"]}>
        <p className={styles["industries-header-tag"]}>Industries</p>
        <h3 className={styles["industries-header-title"]}>
          Popular Businesses and Practitioners who use Ambel
        </h3>
        <p className={styles["industries-header-para"]}>
          Our platform supports a diverse range of professionals, with popular
          industries; including: healthcare providers, medi spas, salons ,
          fitness coaches, law agencies, beauty specialists, consultants, and
          therapists.
        </p>
      </header>

      <div className={styles["industries-tab-wrapper"]}>
        <div className={styles["industries-tab-container"]}>
          {workingIndustries.map((item) => (
            <button key={item.value} value={item.value}>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles["industry-card-container"]}>
        <article className={styles["industry-active-card"]}>
          <div className={styles["industry-active-card-content"]}>
            <span>Doctor</span>
            <h4>Business solution for healthcare providers</h4>
            <p>
              Our software allows Doctors and Medical Professionals to book
              appointment, manage their patients, provide online prescriptions,
              overview of their med charts and automatically send reminders for
              treatments.
            </p>

            <p>
              Learn More <RxExternalLink />
            </p>
          </div>

          <figure>
            <img src="https://s3-alpha-sig.figma.com/img/5e00/d82f/e8b0a341e4280dc3da6bc8c1a1533a94?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lTMT~GUk9u7OJ-TGJI81axcR0Tz7wxd1KOzYvPeADBZJhrRv27p1FNhKD8Vs~7gN4Ou7q-rKO2ZUJsv-FiwLGlv4xOlm6di96umQj~rR3rxVQ6QpXw38KXztdz3ePE01SKxiAyx9VwTmQwISYFpwC9Y9oMG9eiFj72ANIQBNsx1Fjqed5m2T-3bL0CSjIqTE-2EeGmlwRbJ3KQsILmiAA3OoJxHh3799HTZsWmGccWL~gG4TG2x8-DcNZfuK~vAphyxM4K8nvTyh2M13wvMnj5Xgcg4EIumBqQ7GfQ-FbgZTLVwKueqgcSclU0OeGN0ccpFyRpijzNXIHVih2O9uqA__ " />
          </figure>
        </article>

        {industries.map((industry) => (
          <figure key={industry.id} className={styles["industry-img-card"]}>
            <img src={industry.imgSrc} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Industries;
