/*
 * @lc app=leetcode.cn id=142 lang=cpp
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        if ( head == nullptr || head -> next == nullptr) return nullptr;
        ListNode *slow = head, *fast = head;     
        do {
            if (fast == nullptr || fast -> next == nullptr) return nullptr;
            slow = slow -> next;
            fast = fast -> next -> next;
        } while (slow != fast);
        // at this point , there is a cycle
        ListNode *meet = head;
        while (meet != slow){
            meet = meet -> next;
            slow = slow -> next;
        }; 
        return meet;
    }
};
// @lc code=end

