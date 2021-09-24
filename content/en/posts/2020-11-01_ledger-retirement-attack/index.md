+++
title = 'Is a Ledger hardware wallet succeptible to a "retirement attack?"'
description = "Answering a security question from The Bitcoin Podcast about the security of hardware wallets."
date = "2020-11-01"
thumbnail = ""
categories = [
  "blockchain", "explainer", "security"
]
tags = ["ledger", "hardware wallets", "security", "retirement attack"]

[distill]
  [distill.supportFiles]
  dtitle = "dtitle.html"
  appendix = "appendix.html"
  bibliography = "refs.bib"

  [[distill.authors]]
  author = "Corey Petty"
  authorURL = "http://coreypetty.com/"

    [[distill.authors.affiliations]]
    name = "Status.im"
    url = "https://status.im"

    [[distill.authors.affiliations]]
    name = "The Bitcoin Podcast"
    url = "https://thebitcoinpodcast.com"

    [[distill.authors.affiliations]]
    name = "Hashing It Out"
    url = "https://hashingitout.stream"

    [[distill.authors.affiliations]]
    name = "BlockChannel"
    url = "https://blockchannel.com"
+++


<d-abstract>
  <p> </p>
</d-abstract>

## Introduction
After an interview with Toby Simpson, the COO of [fetch.ai](https://fetch.ai), on Hashing It Out (will be released shortly), I shared a blog article{{<cite bib="simpsonletsallbeabank">}} of his that was mentioned in [The Bitcoin Podcast](https://thebitcoinpodcast.com) slack for others to read it. It is a post about the consequences of "becoming a bank" that aren't often talked about, and gives some guidance on how to increase your level of personal security by setting up a hardware wallet. It is a good article, I'd suggest you read it. 

One of the reactions from the slack was about technical concerns of Ledger hardware wallets, quoted below:

>Corey thanks for sharing, interesting read. As a non technical noob I’m fairly confident of my ledger wallet set up if my small bag X10 or more.
>
>However the thing that I'm worried about is a retirement attack where ledger employee has pre uploaded 1000’s of seeds where he/she is waiting till there is $1billion and takes it all. From what I have heard only a phase 25th word can prevent this. This was too technical so I haven’t done it. Same with multisig. How worried should I be of this? Anything I can do about it.
>
>I know I have to level up, at 41 my brain can’t be fked learning new things. You maybe interested in this pod if you haven’t heard already.

Two things here, the possibility of this attack on a ledger hardware wallet, and then how it pertains to a <abbr title="multisignature wallet">multisig</abbr>. I'll tackle the first as well as what you're generally protected by, and then explain the concpet of a multisig and how it provides additional security. 

## Can a Ledger hardware wallet be "retirement attacked?"
If you are unaware of what a `seed phrase` is, I would recommend reading the above mentioned article so that you get a mental idea of what it is, and how pivotal it is in the context of the security of your cryptocurrency. In short, it is the password that derives all of your key material in cryptocurrency, which gives you the ability to "own" digital assets on a blockchain. Having access to it means having access to all of your cryptocurrency.

So let's first outline the attack mentioned:
1. A ledger employee pre-uploads 1000's of seed phrases onto hardware wallets, assuming during some part of manufacturing process. 
2. Said employee monitors the assets that are loaded onto the uploaded seed phrases, and waits until they hit a certain threshhold value of his/her choosing.
3. Once the threshhold is met, said employee swipes all of the assets to a seperate wallet of his/her ownership and absconds with the money. 

So in order for the attacker (the Ledger employee) to successfully pull this off, two things need to be true:
- The Ledger manufacturing process needs to pre-load seed phrases, and an employee will need to be able to infuence this process.
- The attacker will need access to your Ledger device password (if you optionally choose to have one)

Let's take care of that first one real quick. Ledger employees do not pre-upload seed phrases on devices during manufacturing. Instead, they are generated on the device using a <abbr title="True Random Number Generator">TRNG</abbr> inside the devices Secure Element{{<cite bib="ledgerdocumentation">}} (a physically seperated, higher security chip on the device). 

{{< notice info >}}
The Ledger manufacturing process has no control over the seed phrases that are generated on the device
{{< /notice >}}

Note that this means you _should never use a hardware wallet that comes with a seed phrase pre-loaded on it!_

If you are still uncomfortable and do not trust this, you can always generate a seed phrase yourself and use the recovery process of the ledger to load it manually on the device. 

Additionally (to the second point), you can optionally add a password to the device, which is required when turning on the Ledger to do anything. When doing this, you fundamentally change the derived addresses associated with the seed phrase, as it is a part of the key derivation process{{<cite bib="ledgersupport">}}. That means, you can have any number of "address sets" based on the password you use with a single seed phrase. It follows that if an attacker somehow gets access to your seed phrase, in order for them to get access to your funds, he/she **must also know your password**. 

## How does a multisig increase my security?
I won't spend too much time explaining the details of the multisig, only quickly comment on their interaction with a hardware wallet.

In general, a multisig address is defined by a single address "owned" by multiple addresses (of which can actually also be a multisig). In order to pass a transcation from the main address, N-of-M of the owners are required to approve it. This distributes the risk across multiple other addresses. I will also not go into the diferent implementations and their limitations in this article. So this allows for a couple different scenarios (none exhaustive):
- A single user has a multi-factor authentication on an account, so they are able to distribute risk of the account. An example of this is a single user having to sign a transaction with multiple different accounts on diffrent devices, so that a lose or compromise of a single device doesn't compromise the entire account. 
- Multiple users share an account and in order to sign any transactions, a certain minimum number of the group have to agree and approve the transaction. This distributes risk across owners for a given account
- any combination of the above

A hardware wallet, in this context, can be where the single address is held and controlled. Meaning either one of your devices for an account is on the Ledger, and maybe another is in your mobile phone wallet. Or for multiple owners scenario, each owner controls their address on a hardware device of their own, combining the security improvements of **both** the hardware wallet and multisignature wallet. This is actually considered best practices for any substantial value amount.

## Conclusion
I hope that this article has answered the initial question in enough detail. There are a lot of subleties to how this stuff works, and it can quickly become confusing. If you are unsure about all the things, it is generally accepted good practice to use a Ledger hardware wallet (or other leading manufacturer). 

Unless you are an advanced user, just be sure to only buy from the manufacturer, back-up your seed phrase securely, and use a passphrase. 

I would like to thank the folks in The Bitcoin Podcast slack for continuing to have useful and intersting conversations. They really make the hard work we've put into making the podcasts worth it. If you aren't a part of it, you can always join for free [here](https://launchpass.com/thebitcoinpodcast). There are many people at all levels of expertise, as long as you're a human and accepting of others, you're welcome to join the group!