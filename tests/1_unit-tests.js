const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', function() {

  suite('Translate to British English', function() {

    test('Translate: Mangoes are my favorite fruit.', function() {
      let text = "Mangoes are my favorite fruit."
      let translation = `Mangoes are my <span class="highlight">favourite</span> fruit.`
      assert.strictEqual(translator.transA2B(text), translation,'Expected favorite --> <span class="highlight">favourite</span>');
    });

    test('Translate: I ate yogurt for breakfast.', function() {
      let text = "I ate yogurt for breakfast."
      let translation = `I ate <span class="highlight">yoghurt</span> for breakfast.`
      assert.strictEqual(translator.transA2B(text), translation,'Expected yogurt --> <span class="highlight">yoghurt</span>');
    });

    test(`Translate: We had a party at my friend's condo.`, function() {
      let text = "We had a party at my friend's condo."
      let translation = `We had a party at my friend's <span class="highlight">flat</span>.`
      assert.strictEqual(translator.transA2B(text), translation,'Expected condo --> <span class="highlight">flat</span>');
    });

    test(`Translate: Can you toss this in the trashcan for me?`, function() {
      let text = "Can you toss this in the trashcan for me?"
      let translation = `Can you toss this in the <span class="highlight">bin</span> for me?`
      assert.strictEqual(translator.transA2B(text), translation,'Expected trashcan --> <span class="highlight">bin</span>');
    });

    test(`Translate: The parking lot was full.`, function() {
      let text = "The parking lot was full."
      let translation = `The <span class="highlight">car park</span> was full.`
      assert.strictEqual(translator.transA2B(text), translation,'Expected parking lot --> <span class="highlight">car park</span>');
    });

    test(`Translate: Like a high tech Rube Goldberg machine.`, function() {
      let text = `Like a high tech Rube Goldberg machine.`
      let translation = `Like a high tech <span class="highlight">Heath Robinson device</span>.`
      assert.strictEqual(translator.transA2B(text), translation,'Expected Rube Goldberg machine --> <span class="highlight">Heath Robinson device</span>');
    });

    test(`Translate: To play hooky means to skip class or work.`, function() {
      let text = `To play hooky means to skip class or work.`
      let translation = `To <span class="highlight">bunk off</span> means to skip class or work.`
      assert.strictEqual(translator.transA2B(text), translation,'Expected play hooky --> <span class="highlight">bunk off</span>');
    });

    test(`Translate: No Mr. Bond, I expect you to die.`, function() {
      let text = `No Mr. Bond, I expect you to die.`
      let translation = `No <span class="highlight">Mr</span> Bond, I expect you to die.`
      assert.strictEqual(translator.transA2B(text), translation,'Expected Mr. --> <span class="highlight">Mr</span>');
    });

    test(`Translate: Dr. Grosh will see you now.`, function() {
      let text = `Dr. Grosh will see you now.`
      let translation = `<span class="highlight">Dr</span> Grosh will see you now.`
      assert.strictEqual(translator.transA2B(text), translation,'Expected Dr. --> <span class="highlight">Dr</span>');
    });

    test(`Translate: Lunch is at 12:15 today.`, function() {
      let text = `Lunch is at 12:15 today.`
      let translation = `Lunch is at <span class="highlight">12.15</span> today.`
      assert.strictEqual(translator.transA2B(text), translation,'Expected 12:15 --> <span class="highlight">12.15</span>');
    });
    
  });

  suite('Translate to American English', function() {

    test(`Translate: We watched the footie match for a while.`, function() {
      let text = `We watched the footie match for a while.`
      let translation = `We watched the <span class="highlight">soccer</span> match for a while.`
      assert.strictEqual(translator.transB2A(text), translation,'Expected footie --> <span class="highlight">soccer</span>');
    });

    test(`Translate: Paracetamol takes up to an hour to work.`, function() {
      let text = `Paracetamol takes up to an hour to work.`
      let translation = `<span class="highlight">Tylenol</span> takes up to an hour to work.`
      assert.strictEqual(translator.transB2A(text), translation,'Expected Paracetamol --> <span class="highlight">Tylenol</span>');
    });

    test(`Translate: First, caramelise the onions.`, function() {
      let text = `First, caramelise the onions.`
      let translation = `First, <span class="highlight">caramelize</span> the onions.`
      assert.strictEqual(translator.transB2A(text), translation,'Expected caramelise --> <span class="highlight">caramelize</span>');
    });

    test(`Translate: I spent the bank holiday at the funfair.`, function() {
      let text = `I spent the bank holiday at the funfair.`
      let translation = `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`
      assert.strictEqual(translator.transB2A(text), translation,'Expected bank holiday --> <span class="highlight">public holiday</span> and caramelise --> <span class="highlight">carnival</span>');
    });

    test(`Translate: I had a bicky then went to the chippy.`, function() {
      let text = `I had a bicky then went to the chippy.`
      let translation = `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`
      assert.strictEqual(translator.transB2A(text), translation,'Expected bicky --> <span class="highlight">cookie</span> and chippy --> <span class="highlight">fish-and-chip shop</span>');
    });

    test(`Translate: I've just got bits and bobs in my bum bag.`, function() {
      let text = `I've just got bits and bobs in my bum bag.`
      let translation = `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`
      assert.strictEqual(translator.transB2A(text), translation,'Expected bits and bobs --> <span class="highlight">odds and ends</span> and bum bag --> <span class="highlight">fanny pack</span>');
    });

    test(`Translate: The car boot sale at Boxted Airfield was called off.`, function() {
      let text = `The car boot sale at Boxted Airfield was called off.`
      let translation = `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`
      assert.strictEqual(translator.transB2A(text), translation,'Expected car boot sale --> <span class="highlight">swap meet</span>');
    });

    test(`Translate: Have you met Mrs Kalyani?`, function() {
      let text = `Have you met Mrs Kalyani?`
      let translation = `Have you met <span class="highlight">Mrs.</span> Kalyani?`
      assert.strictEqual(translator.transB2A(text), translation,'Expected Mrs --> <span class="highlight">Mrs.</span>');
    });
    
    test(`Translate: Prof Joyner of King's College, London.`, function() {
      let text = `Prof Joyner of King's College, London.`
      let translation = `<span class="highlight">Prof.</span> Joyner of King's College, London.`
      assert.strictEqual(translator.transB2A(text), translation,'Expected Prof --> <span class="highlight">Prof.</span>');
    });

    test(`Translate: Tea time is usually around 4 or 4.30.`, function() {
      let text = `Tea time is usually around 4 or 4.30.`
      let translation = `Tea time is usually around 4 or <span class="highlight">4:30</span>.`
      assert.strictEqual(translator.transB2A(text), translation,'Expected 4.30 --> <span class="highlight">4:30</span>');
    });
    
  });

  suite('Highlight translated words', function() {

    test('Highlight: Mangoes are my favorite fruit.', function() {
      let text = "Mangoes are my favorite fruit."
      assert.include(translator.transA2B(text), `<span class="highlight">`,'Output expected to include span element.');
      assert.include(translator.transA2B(text), `</span>`,'Output expected to include span element.');
    });

    test('Highlight: I ate yogurt for breakfast.', function() {
      let text = "I ate yogurt for breakfast."
      assert.include(translator.transA2B(text), `<span class="highlight">`,'Output expected to include span element.');
      assert.include(translator.transA2B(text), `</span>`,'Output expected to include span element.');

    });

    test(`Highlight: We watched the footie match for a while.`, function() {
      let text = `We watched the footie match for a while.`
      assert.include(translator.transB2A(text), `<span class="highlight">`,'Output expected to include span element.');
      assert.include(translator.transB2A(text), `</span>`,'Output expected to include span element.');

    });

    test(`Highlight: Paracetamol takes up to an hour to work.`, function() {
      let text = `Paracetamol takes up to an hour to work.`
      assert.include(translator.transB2A(text), `<span class="highlight">`,'Output expected to include span element.');
      assert.include(translator.transB2A(text), `</span>`,'Output expected to include span element.');

    });
      
    });

});
