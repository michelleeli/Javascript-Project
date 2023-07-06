document.addEventListener("DOMContentLoaded", async () => {
    const tabs = document.querySelector('.tabs')
    const description = document.querySelector('.description')
    

    const titles = ["Social Support", "Freedom to Make Life Choices", "Generosity", "Perceptions of Corruption", "Healthy Life Expectancy", "Logged GDP per capita"]
    titles.forEach (tabtitle => {
        let tab = document.createElement("button");
        tab.innerText = tabtitle;
        tabs.appendChild(tab);
    })

    description.innerText = 'Income, health, having someone to count on, having a sense of freedom to make key life decisions, generosity, and the absence of corruption all play strong roles in supporting life evaluations. This year the following questions were asked: \n \n 1. What is the consensus view about measuring national happiness, and what kinds of behaviour does it require of individuals and institutions? \n 2. How have trust and benevolence saved lives and supported happiness over the past three years of COVID-19 and other crises? \n 3. What is state effectiveness and how does it affect human happiness? \n 4. How does altruistic behaviour by individuals affect their own happiness, that of the recipient, and the overall happiness of society? \n 5. How well does social media data enable us to measure the prevailing levels of happiness and distress?'

    function updateTab(e) {
        // e.target.id = "active"
        if (e.target.innerText === "Social Support") {
            // let title = document.createElement('h3')
            // title.innerText = "Social Support"
            description.innerText = "Social support, or having someone to count on in times of trouble. \n \n 'If you were in trouble, do you have relatives or friends you can count on to help you whenever you need them, or not?'"
            // description.prepend(title)
        } else if (e.target.innerText === "Freedom to Make Life Choices") {
            description.innerText = '"Are you satisfied or dissatisfied with your freedom to choose what you do with your life?" \n \n This also includes Human Rights. Inherent to all human beings, regardless of race, sex, nationality, ethnicity, language, religion, or any other status. Human rights include the right to life and liberty, freedom from slavery and torture, freedom of opinion and expression, the right to work and education, and many more. Everyone is entitled to these rights without discrimination."'
        } else if (e.target.innerText === "Generosity") {
            description.innerText = "“Have you donated money to a charity in the past month?” \n \n A clear marker for a sense of positive community engagement and a central way that humans connect with each other. Research shows that in all cultures, starting in early childhood, people are drawn to behaviours which benefit other people."
        } else if (e.target.innerText === "Perceptions of Corruption") {
            description.innerText = "“Is corruption widespread throughout the government or not” and “Is corruption widespread within businesses or not?” \n \n Do people trust their governments and have trust in the benevolence of others?"
        } else if (e.target.innerText === "Healthy Life Expectancy") {
            description.innerText = "More than life expectancy, how is your physical and mental health? \n \n Mental health is a key component of subjective well-being and is also a risk factor for future physical health and longevity. Mental health influences and drives a number of individual choices, behaviours, and outcomes."
        } else if (e.target.innerText === "Logged GDP per capita") {
            description.innerText = "Gross Domestic Product, or how much each country produces, divided by the number of people in the country. GDP per capita gives information about the size of the economy and how the economy is performing"
        } 
    }

    tabs.addEventListener('click', updateTab)

})