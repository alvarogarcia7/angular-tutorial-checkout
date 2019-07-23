.PHONY: sync
sync:
	git pull
	git push --all

.PHONY: import
import:
	mv ~/Downloads/angular-tutorial-checkout.zip . 
	unzip -o angular-tutorial-checkout.zip
	rm angular-tutorial-checkout.zip

